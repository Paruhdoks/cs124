import './App.css';
import {TaskList} from "./TaskList";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {useState} from "react";

function App(props) {
    const [onlyIncomplete, setOnlyIncomplete] = useState(false);
    const [editedItem, setEditedItem] = useState(null);
    const [taskData, setTaskData] = useState(props.tasks);

    function toggleTaskAsComplete(taskId) {
        setTaskData(taskData.map(
            task => task.id !== taskId ? task : {...task, completed: !task.completed}
        ))
    }

    return (
        <div className="App">
            <Header title={"List of Tasks"}/>
            <TaskList tasks={taskData} onlyIncomplete={onlyIncomplete} toggleTaskAsComplete={toggleTaskAsComplete}></TaskList>
            <Footer onlyIncomplete={onlyIncomplete} setOnlyIncomplete={setOnlyIncomplete}/>
        </div>
    );
}

    export default App;
