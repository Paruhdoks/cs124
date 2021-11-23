import './Task.css';
import {useEffect, useRef} from "react";
import TextareaAutosize from 'react-textarea-autosize';
import editIcon from "./icons/edit-icon.png";
import editCompleteIcon from "./icons/edit-complete-icon.png";
import deleteIcon from "./icons/delete-icon.png";

export function Task(props) {
    const nameInput = useRef(null);
    useEffect(() => {
        if (props.edited) {
            nameInput.current.focus();
            nameInput.current.scrollIntoView();
        }
    }, [props.edited])
    return <li>
        <div className={"task-row"} tabIndex={0} aria-label={"Task," + props.name + "; Priority Level," + props.priority + (props.completed ? "; Completed" : "; Incomplete")}>
            <label htmlFor={props.id}>
                <input type="checkbox" id={props.id} name={props.id} onChange={props.clickHandler}
                       checked={props.completed}/>
                <div htmlFor={props.id} className={"checkbox priority-" + props.priority} tabIndex={0}
                       onKeyUp={(e) => {if (e.keyCode === 32) {
                           props.clickHandler();
                       }}}
                ></div>
                {props.edited ?
                    <TextareaAutosize value={props.name} ref={nameInput} aria-label={"Rename Task; Current name, " + props.name}
                                      onChange={(e) => props.editTaskName(e.target.value)}/> :
                    <span className="label-text" aria-label={"Task name, " + props.name + "; checkbox"}>{props.name}</span>}
            </label>
            <div className="edit-delete">
                {<button onClick={function () {
                    if (props.edited) {
                        props.resetEditedItem()
                    } else {
                        props.setEditedItem()
                    }
                }} aria-label={props.edited ? "Stop editing task" : "Edit task"}><img src={props.edited ? editCompleteIcon : editIcon} alt="edit item" width="35px" height="35px"/></button>}
                <button onClick={props.deleteTask}><img src={deleteIcon} alt="delete item" width="35px"
                                                        height="35px" aria-label={"Delete task," + props.name}
                /></button>
            </div>
        </div>
        {props.edited ? <div className={"priority-select"}>
            <span className={"priority-label"}>Priority: </span>
            {[1, 2, 3].map((number) => <span key={number} className={"priority-box priority-" + number} aria-label={(props.priority !== number ? "Change priority level to, " + number + " ;": "" ) + "Current priority level, " + props.priority}
                                             tabIndex={0}
                                             onKeyUp={(e) => {if (e.keyCode === 32) {
                                                 props.editPriority(number);
                                             }}}
                                             onClick={() => props.editPriority(number)}/>)}
        </div> : null}
    </li>
}