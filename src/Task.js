import './Task.css';
import {useEffect, useRef} from "react";
import editIcon from "./icons/edit-icon.png";
import deleteIcon from "./icons/delete-icon.png";

export function Task(props) {
    const nameInput = useRef(null);
    useEffect(()=>{
        if (props.edited) {
            nameInput.current.focus();
        }
    },[props.edited])
    return <li>
        <label htmlFor={props.id}>
            <input type="checkbox" id={props.id} name={props.id} onChange={props.clickHandler}
                   checked={props.completed}/>
            <div className="checkbox"></div>
            {props.edited ?
                <input type="text" ref={nameInput} value={props.name} onChange={(e) => props.editTaskName(e.target.value)} onBlur={props.resetEditedItem}></input> :
                <span className="label-text">{props.name}</span>}
        </label>
        <div className="edit-delete">
            {props.edited ? null : <img src={editIcon} alt="edit item" width="35px" height="35px"
                                        onClick={function() {
                                            props.setEditedItem();
                                        }}/>}
            <img src={deleteIcon} alt="delete item" width="35px" height="35px"
                 onClick={props.deleteTask}/>
        </div>
    </li>
}