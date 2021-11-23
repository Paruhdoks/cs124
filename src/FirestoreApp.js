import App from "./App.js";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";
import {useState} from "react";

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

export function FirestoreApp(props) {
    const [collections, setCollections] = useState(["Tasks"]);
    const [collection, setCollection] = useState("Tasks");
    const [sortOptions, setSortOptions] = useState(["priority", "desc"]);
    const [sortString, sortDirection] = sortOptions;
    const query = db.collection(collection).orderBy(sortString, sortDirection);
    const [value, loading, error] = useCollection(query);

    function onCollectionsAdded(name) {
        setCollections([...collections, name]);
    }

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

    async function onCollectionsDeleted(name) {
        setCollections(collections.filter((c) => c !== name));
    }

    return <App setCollection={setCollection} collection={collection} tasks={taskData} sortOptions={sortOptions}
                setSortOptions={setSortOptions} onItemChanged={onItemChanged} onItemAdded={onItemAdded}
                onItemsDeleted={onItemsDeleted}
                onCollectionsAdded={onCollectionsAdded}
                onCollectionsDeleted={onCollectionsDeleted}
                collections={collections}
    />
}
