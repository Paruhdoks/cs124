import './TaskList.css';
import {Task} from "./Task";

export function TaskList(props) {
    const tasks = props.onlyIncomplete ? props.tasks.filter((task) => !task.completed): props.tasks;
    const taskDivs = tasks.map(task => (
       <Task {...task} clickHandler={() => props.toggleTaskAsComplete(task.id)} key={task.id}/>
));
    return <div id={"task-list-area"}>
        <ul id={"task-list"}>{taskDivs}</ul>
    </div>
}

