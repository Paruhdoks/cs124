import App from "./App.js";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";
import {useState} from "react";
import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword
} from 'react-firebase-hooks/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqjBv9F9MnhkTPQeRghfLj06E8iJVh0lg",
    authDomain: "list-of-tasks-281cc.firebaseapp.com",
    projectId: "list-of-tasks-281cc",
    storageBucket: "list-of-tasks-281cc.appspot.com",
    messagingSenderId: "319211842925",
    appId: "1:319211842925:web:78baa57a16f2989eac3e64"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export function AuthApp(props) {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <p>Checking...</p>;
    } else if (user) {
        return <div>
            {user.displayName || user.email}
            <button type="button" onClick={() => auth.signOut()}>Logout</button>
            <FirestoreApp {...props} user={user}/>
        </div>
    } else {
        return <>
            {error && <p>Error App: {error.message}</p>}
            <div>
                <SignIn key="Sign In"/>
                <SignUp key="Sign Up"/>
            </div>
        </>
    }
}

const FAKE_EMAIL = 'foo@bar.com';
const FAKE_PASSWORD = 'xyzzyxx';

function SignIn() {
    const [
        signInWithEmailAndPassword,
        userCredential, loading, error
    ] = useSignInWithEmailAndPassword(auth);

    if (userCredential) {
        // Shouldn't happen because App should see that
        // we are signed in.
        return <div>Unexpectedly signed in already</div>
    } else if (loading) {
        return <p>Logging in…</p>
    }
    return <div>
        {error && <p>"Error logging in: " {error.message}</p>}
        <button onClick={() =>
            signInWithEmailAndPassword(FAKE_EMAIL, FAKE_PASSWORD)}>Login with test user Email/PW
        </button>
    </div>
}

function SignUp() {
    const [
        createUserWithEmailAndPassword,
        userCredential, loading, error
    ] = useCreateUserWithEmailAndPassword(auth);

    if (userCredential) {
        // Shouldn't happen because App should see that
        // we are signed in.
        return <div>Unexpectedly signed in already</div>
    } else if (loading) {
        return <p>Signing up…</p>
    }

    return <div>
        {error && <p>"Error signing up: " {error.message}</p>}
        <button onClick={async () => {
            const userCredential = await auth.createUserWithEmailAndPassword(FAKE_EMAIL, FAKE_PASSWORD)
            const id = generateUniqueID()
            await db.doc(`Lists/${id}`).set(
                {
                    id: id,
                    name: "Tasks",
                    owner: userCredential.user.uid,
                    shared: [userCredential.user.email],
                    tasks: []
                }
            );
        }}>
            Create test user
        </button>

    </div>
}


export function FirestoreApp(props) {
    const collectionsQuery = db.collection(`Lists`).where("shared","array-contains", props.user.email);
    const [collectionsSnapshot, loadingC, errorC] = useCollection(collectionsQuery);

    const [collection, setCollection] = useState(null);
    const [sortOptions, setSortOptions] = useState(["priority", "desc"]);
    const [sortString, sortDirection] = sortOptions;

    const query = db.collection(`Lists/${collection.id}/tasks`).orderBy(sortString, sortDirection);
    const [value, loading, error] = useCollection(query);
    function getCollections(qSnapshot) {
        let collections = [];
        if (qSnapshot) {
            qSnapshot.docs.forEach((doc) => {collections.push(doc.data())});
            if (collection === null) {
                setCollection(collections[0]);
            }
        }
        return collections;
    }


    function onCollectionsAdded(name) {
        const id = generateUniqueID()
        const query = db.doc(`Lists/${id}`).set(
            {
                id: id,
                name: name,
                owner: props.user.uid,
                shared: [props.user.email]
            }
        )
    }

    function onItemChanged(taskId, property, newValue) {
        db.collection(`Lists/${collection.id}/tasks`).doc(taskId).update({[property]: newValue});
    }

    function onItemAdded() {
        const id = generateUniqueID();
        db.collection(`Lists/${collection.id}/tasks`).doc(id).set(
            {
                id: id,
                name: "",
                completed: false,
                priority: 2,
                created: firebase.database.ServerValue.TIMESTAMP
            }
        )
        return id;
    }


    function onItemsDeleted(ids) {
        const col = db.collection(`Lists/${collection.id}/tasks`);
        ids.forEach(id => col.doc(id).delete());
    }

    const taskData = loading ? loading : value.docs.map((doc) => doc.data());

    async function onCollectionsDeleted(collection) {
        db.doc(`Lists/${collection.id}`).delete();
    }

    return <App setCollection={setCollection} collection={collection ? collection : {name: "Loading", id: null}} tasks={taskData} sortOptions={sortOptions}
                setSortOptions={setSortOptions} onItemChanged={onItemChanged} onItemAdded={onItemAdded}
                onItemsDeleted={onItemsDeleted}
                onCollectionsAdded={onCollectionsAdded}
                onCollectionsDeleted={onCollectionsDeleted}
                collections={getCollections(collectionsSnapshot)}
    />
}
