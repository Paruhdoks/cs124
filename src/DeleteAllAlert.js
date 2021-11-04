import {Alert} from "./Alert";

export function DeleteAllAlert(props) {
    return (
        <Alert onClose={props.onClose} onOK={props.onOK}>
            <div>{`Are you sure you want to delete all ${props.completedTasksNumber}/${props.tasksNumber} completed tasks?`}
            </div>
        </Alert>);
}