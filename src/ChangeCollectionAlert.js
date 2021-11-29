import {Alert} from "./Alert";
import "./ChangeCollectionAlert.css";
import {useEffect, useRef, useState} from "react";
import {CollectionsRow} from "./CollectionsRow";
import addIcon from "./icons/add-icon.png";
import TextareaAutosize from "react-textarea-autosize";

export function ChangeCollectionAlert(props) {
    // store as state so not reloading list in background when choosing
    let [selectedCollection, setSelectedCollection] = useState(props.collection);
    let [newName, setNewName] = useState("");
    let [edited, setEdited] = useState(false);
    const nameInput = useRef(null);

    useEffect(() => {
        if (edited) {
            nameInput.current.focus();
            nameInput.current.scrollIntoView();
        }
    }, [edited])

        console.log(`Alert selected: ${selectedCollection}`);

    return (

        <Alert onClose={props.onClose} onOK={() => props.onOK(selectedCollection)}
               modalClassName="change-collection-modal"
               deleteAlert={false}
               middleIcon={<img src={addIcon} alt="cancel" width="45px" height="45px"/>}
               middleIconOnClick={() => setEdited(true)}
        >
            <div>
                <div className={"center-text"}>{`Which list would you like to view?`}</div>
                <ul id={"collections-list"}>
                    {props.collections.map((c) => <CollectionsRow key={c.name} setSelectedCollection={() => setSelectedCollection(c)}

                                                                  selected={selectedCollection.id === c.id} name={c.name}

                                                                  onDelete={() => props.onCollectionsDeleted(c)}/>)

                    }
                </ul>
                {edited &&
                <TextareaAutosize key={"edit"} value={newName} ref={nameInput}
                                  onChange={(e) => setNewName(e.target.value)}
                                  onKeyPress={(e) => {
                                      if (e.key === "Enter") {
                                          e.stopPropagation();
                                          nameInput.current.blur();
                                      }
                                  }}
                                  onBlur={(e) => {
                                      setEdited(false);
                                      if (newName === "") {
                                          props.onCollectionsAdded("Untitled");
                                          setSelectedCollection("Untitled");
                                      } else {
                                          props.onCollectionsAdded(newName);
                                          setSelectedCollection(newName);
                                      }

                                  }}
                />}

            </div>
        </Alert>);
}
