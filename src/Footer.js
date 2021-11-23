import './Footer.css';
import deleteCompletedIcon from "./icons/delete-completed-icon.png";
import addIcon from "./icons/add-icon.png";
import viewAllIcon from "./icons/view-all.png";
import viewIncompleteIcon from "./icons/view-incomplete.png";
import {useRef} from "react";

export function Footer(props)
{
    const imgSize = "40px";
    return <footer tabIndex={0}>
        <button id='delete-completed-btn' onClick={props.deleteAllCompleted} aria-label={"Delete all completed tasks"}><img src={deleteCompletedIcon} alt="delete completed"
                                            width={imgSize} height={imgSize}/></button>
        <button id='add-new-btn' tabIndex={0} onClick={props.addTask} aria-label={"Add new task"}><img src={addIcon} alt="Add New Task" width={imgSize} height={imgSize}/>
        </button>
        <button id='show-incomplete-all-btn' tabIndex={0}
                onClick={()=>props.setOnlyIncomplete(!props.onlyIncomplete)} aria-label={props.onlyIncomplete ? "Currently viewing, only incomplete tasks; View all tasks" : "Currently viewing, all tasks; View only incomplete tasks"}>
            {props.onlyIncomplete ? <img src={viewAllIcon} width={"45px"} height={"45px"}
                                        alt="View All"/> : <img src={viewIncompleteIcon} width={"45px"} height={"45px"}
                                        alt="View Incomplete"/>}
        </button>
    </footer>
}