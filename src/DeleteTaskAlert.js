import {DeleteAlert} from "./DeleteAlert";

export function DeleteTaskAlert(props) {
    return (
        <DeleteAlert onClose={props.onClose} onOK={props.onOK}>
            <div><span>Are you sure you want to delete </span><span className={"task-name"}>{props.name}</span><span>?</span>
            </div>
        </DeleteAlert>);
}