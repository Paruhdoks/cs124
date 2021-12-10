import App from "./App.js";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";
import {useState} from "react";

export function FirestoreApp(props) {
    const collectionsQuery =props.db.collection(`Lists`).where("shared","array-contains", props.user.email);
    const [collectionsSnapshot, loadingC, errorC] = useCollection(collectionsQuery);
    const [collection, setCollection] = useState(null);
    const [sortOptions, setSortOptions] = useState(["priority", "desc"]);
    const [sortString, sortDirection] = sortOptions;

    const query =props.db.collection(`Lists/${collection ? collection.id : "null"}/tasks`).orderBy(sortString, sortDirection);
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
        const query =props.db.doc(`Lists/${id}`).set(
            {
                id: id,
                name: name,
                owner: props.user.uid,
                shared: [props.user.email]
            }
        )
    }

    function onCollectionsShared(collection, email) {
        if (email !== "") {
            const query = props.db.doc(`Lists/${collection.id}`).update(
                {
                    shared: [...collection.shared, email]
                }
            )
        }
    }

    function onItemChanged(taskId, property, newValue) {props.db.collection(`Lists/${collection.id}/tasks`).doc(taskId).update({[property]: newValue});
    }

    function onItemAdded() {
        const id = generateUniqueID();props.db.collection(`Lists/${collection.id}/tasks`).doc(id).set(
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
        const col =props.db.collection(`Lists/${collection.id}/tasks`);
        ids.forEach(id => col.doc(id).delete());
    }

    async function onCollectionsDeleted(collection) {props.db.doc(`Lists/${collection.id}`).delete();
    }
    const taskData = loading || !value ? loading : value.docs.map((doc) => doc.data());

    return <App setCollection={setCollection} collection={collection ? collection : {name: "Loading", id: null}} tasks={taskData} sortOptions={sortOptions}
                setSortOptions={setSortOptions} onItemChanged={onItemChanged} onItemAdded={onItemAdded}
                onItemsDeleted={onItemsDeleted}
                onCollectionsAdded={onCollectionsAdded}
                onCollectionsDeleted={onCollectionsDeleted}
                onCollectionShared={onCollectionsShared}
                collections={getCollections(collectionsSnapshot)}
                logOut={props.logOut}
                email={props.user.email}
    />
}
