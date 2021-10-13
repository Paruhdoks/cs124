import './Footer.css';
import deleteCompletedIcon from "./icons/delete-completed-icon.png";
import addIcon from "./icons/add-icon.png";
import viewAllIcon from "./icons/view-all.png";
import viewIncompleteIcon from "./icons/view-incomplete.png";

export function Footer(props)
{
    const imgSize = "40px";
    return <footer>
        <div id='delete-completed-btn' onClick={props.deleteAllCompleted}><img src={deleteCompletedIcon} alt="delete completed"
                                            width={imgSize} height={imgSize}/></div>
        <div id='add-new-btn' onClick={props.addTask}><img src={addIcon} alt="Add New Task" width={imgSize} height={imgSize}/>
        </div>
        <div id='show-incomplete-all-btn' onClick={()=>props.setOnlyIncomplete(!props.onlyIncomplete)}>
            {props.onlyIncomplete ? <img src={viewAllIcon} width={"45px"} height={"45px"}
                                        alt="View All"/> : <img src={viewIncompleteIcon} width={"45px"} height={"45px"}
                                        alt="View Incomplete"/>}
        </div>
    </footer>
}