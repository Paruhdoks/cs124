import {useMediaQuery} from 'react-responsive';

import "./App.css";
import {TaskList} from "./TaskList";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {DeleteAllAlert} from "./DeleteAllAlert";
import {DeleteTaskAlert} from "./DeleteTaskAlert";
import {ChangeCollectionAlert} from "./ChangeCollectionAlert";
import {useState} from "react";
import {SortBar} from "./SortBar";

function App(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1225px)'
    })
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})

    const [onlyIncomplete, setOnlyIncomplete] = useState(false);
    const [editedItem, setEditedItem] = useState(null);
    const [deleteAllAlert, setDeleteAllAlert] = useState(false);
    const [deleteTaskAlert, setDeleteTaskAlert] = useState(null);
    const [changeCollectionAlert, setChangeCollectionAlert] = useState(false);

    function deleteAllCompleted() {
        props.onItemsDeleted(props.tasks.filter(
            task => task.completed
        ).map(task => task.id))
    }

    function addTask() {
        const id = props.onItemAdded();
        setEditedItem(id);
    }

    const footer = <Footer onlyIncomplete={onlyIncomplete} setOnlyIncomplete={setOnlyIncomplete}
                           deleteAllCompleted={() => setDeleteAllAlert(!deleteAllAlert)} addTask={addTask}/>;

    return (
        <div className="App">
            <div className={"main-app"}>
                <Header title={props.collection.name} onClick={() => setChangeCollectionAlert(true)}/>
                {isDesktopOrLaptop && footer}
                <SortBar sortOptions={props.sortOptions} setSortOptions={props.setSortOptions}/>
                <TaskList tasks={props.tasks} onlyIncomplete={onlyIncomplete}
                          toggleTaskAsComplete={(id, value) => props.onItemChanged(id, "completed", value)}
                          deleteTask={(task) => setDeleteTaskAlert(task)}
                          editPriority={(id, value) => props.onItemChanged(id, "priority", value)}
                          editTaskName={(id, value) => props.onItemChanged(id, "name", value)} setEdit={setEditedItem}
                          editedItem={editedItem} resetEditedItem={() => setEditedItem(null)}/>
                {isTabletOrMobile && footer}
            </div>
            {deleteAllAlert && <DeleteAllAlert onClose={() => setDeleteAllAlert(false)} onOK={deleteAllCompleted}
                                               tasksNumber={props.tasks.length}
                                               completedTasksNumber={props.tasks.filter((task) => (task.completed)).length}/>}
            {
                deleteTaskAlert && <DeleteTaskAlert onClose={() => setDeleteTaskAlert(null)}
                                                    onOK={() => props.onItemsDeleted([deleteTaskAlert.id])}
                                                    name={deleteTaskAlert.name}/>
            }
            {
                changeCollectionAlert && <ChangeCollectionAlert onClose={() => setChangeCollectionAlert(null)}
                                                                onOK={props.setCollection} collection={props.collection}
                                                                onCollectionsAdded={props.onCollectionsAdded}
                                                                onCollectionsDeleted={props.onCollectionsDeleted}
                                                                collections={props.collections}/>
            }
        </div>
    );
}

export default App;
