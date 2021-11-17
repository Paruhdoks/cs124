import './Task.css';
import {useEffect, useRef} from "react";
import TextareaAutosize from 'react-textarea-autosize';
import editIcon from "./icons/edit-icon.png";
import editCompleteIcon from "./icons/edit-complete-icon.png";
import deleteIcon from "./icons/delete-icon.png";

export function Task(props) {
    const nameInput = useRef(null);
    useEffect(()=> {
        if(props.edited) {
            nameInput.current.focus();
            nameInput.current.scrollIntoView();
        }
    }, [props.edited])
    return <li>
        <div className={"task-row"}>
        <label htmlFor={props.id}>
            <input type="checkbox" id={props.id} name={props.id} onChange={props.clickHandler}
                   checked={props.completed}/>
            <div className={"checkbox priority-" + props.priority}></div>
            {props.edited ?
                <TextareaAutosize value={props.name} ref={nameInput}  onChange={(e) => props.editTaskName(e.target.value)} /> :
                <span className="label-text">{props.name}</span>}
        </label>
        <div className="edit-delete">
            {<img src={props.edited ? editCompleteIcon :editIcon} alt="edit item" width="35px" height="35px"
                                        onClick={function() {
                                            if (props.edited) {
                                                props.resetEditedItem()
                                            } else {
                                                props.setEditedItem()
                                            }
                                        }}/>}
            <img src={deleteIcon} alt="delete item" width="35px" height="35px"
                 onClick={props.deleteTask}/>
        </div>
        </div>
        {props.edited ? <div className={"priority-select"}>
            <span className={"priority-label"}>Priority: </span>
            {[1, 2, 3].map((number) => <span key={number} className={"priority-box priority-"+number}
            onClick={() => props.editPriority(number)}/>)}
        </div> : null}
    </li>
}