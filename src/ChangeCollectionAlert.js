import {Alert} from "./Alert";
import "./ChangeCollectionAlert.css";
import {useState} from "react";
import {CollectionsRow} from "./CollectionsRow";
import addIcon from "./icons/add-icon.png";

export function ChangeCollectionAlert(props) {
    // store as state so not reloading list in background when choosing
    let [selectedCollection, setSelectedCollection] = useState(props.collection);
    return (

        <Alert onClose={props.onClose} onOK={() => props.onOK(selectedCollection)}
               modalClassName="change-collection-modal"
               deleteAlert={false}>
            <div>
                <div className={"center-text"}>{`Which list would you like to view?`}</div>
                <ul>
                    {props.collections.map((c) => <CollectionsRow setSelectedCollection={setSelectedCollection} selected={selectedCollection === c} name={c} onDelete={() => props.onCollectionsDeleted(c)} />)}
                </ul>
                <img src={addIcon} alt="cancel" width="45px" height="45px"
                     onClick={() => props.onCollectionsAdded("New")}/>
            </div>
        </Alert>);
}
