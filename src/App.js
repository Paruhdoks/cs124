import "./App.css";
import {TaskList} from "./TaskList";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function App(props) {
    const [onlyIncomplete, setOnlyIncomplete] = useState(false);
    const [editedItem, setEditedItem] = useState(null);
    const [taskData, setTaskData] = useState(props.tasks);

    function toggleTaskAsComplete(taskId) {
        setTaskData(taskData.map(
            task => task.id !== taskId ? task : {...task, completed: !task.completed}
        ))
    }

    function deleteTask(taskId) {
        setTaskData(taskData.filter(
            task => task.id !== taskId
        ))
    }

    function deleteAllCompleted() {
        setTaskData(taskData.filter(
            task => !task.completed
        ))
    }

    function addTask() {
        const id = generateUniqueID();
        setTaskData([...taskData, {
            name: "",
            id: id,
            completed: false
        }])
        setEditedItem(id);
    }

    function editTaskName(taskId, newName) {
        setTaskData(taskData.map(
            task => task.id !== taskId ? task : {...task, name: newName}
        ))
    }

    function resetEditedItem() {
        setEditedItem(null);
    }

    return (
        <div className="App">
            <Header title={"List of Tasks"}/>
            <TaskList tasks={taskData} onlyIncomplete={onlyIncomplete} toggleTaskAsComplete={toggleTaskAsComplete}
                      deleteTask={deleteTask} editTaskName={editTaskName} setEdit={setEditedItem} editedItem={editedItem} resetEditedItem={resetEditedItem}></TaskList>
            <Footer onlyIncomplete={onlyIncomplete} setOnlyIncomplete={setOnlyIncomplete}
                    deleteAllCompleted={deleteAllCompleted} addTask={addTask}/>
        </div>
    );
}

export default App;
