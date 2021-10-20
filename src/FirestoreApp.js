import App from "./App.js";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";

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
const collection = "Tasks";

export function FirestoreApp(props) {
    const query = db.collection(collection);
    const [value, loading, error] = useCollection(query);

    function onItemChanged(taskId, property, newValue) {
        db.collection(collection).doc(taskId).update({[property]: newValue});
    }

    function onItemAdded() {
        const id = generateUniqueID();
        db.collection(collection).doc(id).set(
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
        const col = db.collection(collection);
        ids.forEach(id => col.doc(id).delete());
    }

    const taskData = loading ? loading : value.docs.map((doc) => doc.data());
    return <App tasks={taskData} onItemChanged={onItemChanged} onItemAdded={onItemAdded} onItemsDeleted={onItemsDeleted}/>
}
