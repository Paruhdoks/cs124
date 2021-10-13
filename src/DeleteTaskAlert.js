import {Alert} from "./Alert";

export function DeleteTaskAlert(props) {
    return (
        <Alert onClose={props.onClose} onOK={props.onOK}>
            <div>Are you sure you want to delete "{props.name}"?
            </div>
        </Alert>);
}