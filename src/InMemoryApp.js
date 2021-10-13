import App from "./App.js";
import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

export function InMemoryApp(props) {
    const [taskData, setTaskData] = useState(props.tasks);

    function onItemChanged(taskId, property, newValue) {
        setTaskData(taskData.map(
            task => task.id !== taskId ? task : {...task, [property]: newValue}
        ))
    }

    function onItemAdded() {
        const id = generateUniqueID();
        setTaskData([...taskData, {
            name: "",
            id: id,
            completed: false
        }])
        return id;
    }


    function onItemsDeleted(ids) {
        setTaskData(taskData.filter(
            task => !(ids.includes(task.id))
        ))
    }

    return <App tasks={taskData} onItemChanged={onItemChanged} onItemAdded={onItemAdded} onItemsDeleted={onItemsDeleted}/>
}
