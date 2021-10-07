import './Footer.css';

export function Footer(props)
{
    const imgSize = "40px";
    return <footer>
        <div id='delete-completed-btn' onClick={props.deleteAllCompleted}><img src="../icons/delete-completed-icon.png" alt="delete completed"
                                            width={imgSize} height={imgSize}/></div>
        <div id='add-new-btn' onClick={props.addTask}><img src="../icons/add-icon.png" alt="Add New Task" width={imgSize} height={imgSize}/>
        </div>
        <div id='show-incomplete-all-btn' onClick={()=>props.setOnlyIncomplete(!props.onlyIncomplete)}>
            {props.onlyIncomplete ? <img src="../icons/view-all.png" width={"45px"} height={"45px"}
                                        alt="View All"/> : <img src="../icons/view-incomplete.png" width={"45px"} height={"45px"}
                                        alt="View Incomplete"/>}
        </div>
    </footer>
}