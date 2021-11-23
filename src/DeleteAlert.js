import "./DeleteAlert.css";
import {Alert} from "./Alert";

export function DeleteAlert(props) {
    return <Alert modalClassName="delete-modal" onClose={props.onClose} onOK={props.onOK}
                  deleteAlert={true}>{props.children}</Alert>
}