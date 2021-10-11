import "./App.css";
import {TaskList} from "./TaskList";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {useState} from "react";

function App(props) {
    const [onlyIncomplete, setOnlyIncomplete] = useState(false);
    const [editedItem, setEditedItem] = useState(null);

    function deleteAllCompleted() {
        console.log(props.tasks.filter(
            task => task.completed
        ).map(task => task.id));
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
            <Header title={"List of Tasks"}/>
            <TaskList tasks={props.tasks} onlyIncomplete={onlyIncomplete}
                      toggleTaskAsComplete={(id, value) => props.onItemChanged(id, "completed", value)}
                      deleteTask={props.onItemsDeleted}
                      editTaskName={(id, value) => props.onItemChanged(id, "name", value)} setEdit={setEditedItem}
                      editedItem={editedItem} resetEditedItem={()=> setEditedItem(null)}></TaskList>
            <Footer onlyIncomplete={onlyIncomplete} setOnlyIncomplete={setOnlyIncomplete}
                    deleteAllCompleted={deleteAllCompleted} addTask={addTask}/>
        </div>
    );
}

export default App;
