import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {FirestoreApp} from "./FirestoreApp";
import firebase from "firebase/compat";
import "./AuthApp.css";
import {useState} from "react";

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    if (loading) {
        return <p>Checking...</p>;
    } else if (user) {
        return <div className={"AuthApp"}>
            <FirestoreApp {...props} user={user} db={db} logOut={() => auth.signOut()}/>
        </div>
    } else {
        return <div className={"AuthApp"}>
            <div className={"login-wrapper"}>
            <div className={"login-page"}>
                <h1 className={"app-title"}>List of Tasks</h1>
            {error && <p>Error App: {error.message}</p>}
                <div className={"form-input"}>
                <label htmlFor={"email"} className={"form-label"}>Email:</label> <input className={"login-input"} type={"email"} id={"email"} value={email}
                                                               onChange={(e) => setEmail(e.target.value)}></input></div>
                <div className={"form-input"}><label className={"form-label"} htmlFor={"password"}>Password:</label>
                <input type={"password"} id={"password"} value={password} className={"login-input"}
                       onChange={(e) => setPassword(e.target.value)}></input></div>
                <SignIn key="Sign In" email={email} password={password}/>
                <SignUp key="Sign Up" email={email} password={password}/>
            </div></div>
        </div>
    }
}

function SignIn(props) {
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
    return <>
        {error && <p>Error logging in: {error.message}</p>}
        <button className={"login-button"} onClick={() =>
            signInWithEmailAndPassword(props.email, props.password)}>Login
        </button>
    </>
}

function SignUp(props) {
    const [
        createUserWithEmailAndPassword,
        userCredential, loading, error
    ] = useCreateUserWithEmailAndPassword(auth);
    const [e, setE] = useState(null);

    if (userCredential) {
        // Shouldn't happen because App should see that
        // we are signed in.
        return <div>Unexpectedly signed in already</div>
    } else if (loading) {
        return <p>Signing up…</p>
    }

    return <>
        {error || e && <p>Error signing up: {error || e}</p>}
        <button className={"login-button"} onClick={async () => {
            try {
                const userCredential = await auth.createUserWithEmailAndPassword(props.email,  props.password);
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
            } catch (e) {
                setE(e.message);
                return;
            }

        }}>
            Sign Up
        </button>

    </>
}