import './TaskList.css';
import {Task} from "./Task";

export function TaskList(props) {

    const tasks = props.onlyIncomplete ? props.tasks.filter((task) => !task.completed) : props.tasks;
    const taskDivs = tasks.map(task => (
        <Task {...task} clickHandler={() => props.toggleTaskAsComplete(task.id)} key={task.id}
              edited = {props.editedItem === task.id}
              deleteTask={() => props.deleteTask(task.id)}
              resetEditedItem={props.resetEditedItem}
              editTaskName={(newValue) => props.editTaskName(task.id, newValue)} setEditedItem={() => props.setEdit(task.id)}/>
    ));
    return <div id={"task-list-area"}>
        {tasks.length === 0 ? <div id={"empty-list-text"}>Hit + to add a new task!</div> :
            <ul id={"task-list"}>{taskDivs}</ul>}
    </div>
}

