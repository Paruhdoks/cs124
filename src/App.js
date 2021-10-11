import "./App.css";
import {TaskList} from "./TaskList";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {DeleteAllAlert} from "./DeleteAllAlert";
import {DeleteTaskAlert} from "./DeleteTaskAlert";
import {useState} from "react";

function App(props) {
    const [onlyIncomplete, setOnlyIncomplete] = useState(false);
    const [editedItem, setEditedItem] = useState(null);
    const [deleteAllAlert, setDeleteAllAlert] = useState(false);
    const [deleteTaskAlert, setDeleteTaskAlert] = useState(null);

    function deleteAllCompleted() {
        props.onItemsDeleted(props.tasks.filter(
            task => task.completed
        ).map(task => task.id))
    }

    function addTask() {
        const id = props.onItemAdded();
        setEditedItem(id);
    }

    return (
        <div className="App">
            <div className={"main-app"}>
                <Header title={"List of Tasks"}/>
                <TaskList tasks={props.tasks} onlyIncomplete={onlyIncomplete}
                          toggleTaskAsComplete={(id, value) => props.onItemChanged(id, "completed", value)}
                          deleteTask={(task) => setDeleteTaskAlert(task)}
                          editTaskName={(id, value) => props.onItemChanged(id, "name", value)} setEdit={setEditedItem}
                          editedItem={editedItem} resetEditedItem={() => setEditedItem(null)}></TaskList>
                <Footer onlyIncomplete={onlyIncomplete} setOnlyIncomplete={setOnlyIncomplete}
                        deleteAllCompleted={() => setDeleteAllAlert(!deleteAllAlert)} addTask={addTask}/>
            </div>
            {deleteAllAlert && <DeleteAllAlert onClose={() => setDeleteAllAlert(false)} onOK={deleteAllCompleted}/>}
            {
                deleteTaskAlert && <DeleteTaskAlert onClose={() => setDeleteTaskAlert(null)}
                                                    onOK={() => props.onItemsDeleted([deleteTaskAlert.id])}
                                                    name={deleteTaskAlert.name}></DeleteTaskAlert>
            }
        </div>
    );
}

export default App;
