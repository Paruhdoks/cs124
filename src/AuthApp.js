import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {FirestoreApp} from "./FirestoreApp";
import firebase from "firebase/compat";
import "./AuthApp.css";

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
        return <div className={"AuthApp"}>
            {user.displayName || user.email}
            <button type="button" onClick={() => auth.signOut()}>Logout</button>
            <FirestoreApp {...props} user={user} db={db}/>
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

const FAKE_EMAIL = 'foo1@bar.com';
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