import {DeleteAlert} from "./DeleteAlert";

export function DeleteAllAlert(props) {
    return (
        <DeleteAlert onClose={props.onClose} onOK={props.onOK}>
            <div>{`Are you sure you want to delete all ${props.completedTasksNumber}/${props.tasksNumber} completed tasks?`}
            </div>
        </DeleteAlert>);
}