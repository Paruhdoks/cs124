import './Footer.css';

export function Footer(props)
{
    return <footer>
        <div id='delete-completed-btn'><img src="../icons/delete-completed-icon.png" alt="delete completed"
                                            width="100" height="100"/></div>
        <div id='add-new-btn'><img src="../icons/add-icon.png" alt="Add New Task" width="100" height="100"/>
        </div>
        <div id='show-incomplete-all-btn' onClick={()=>props.setOnlyIncomplete(!props.onlyIncomplete)}>
            {props.onlyIncomplete ? <img src="../icons/view-all.png" width="100" height="100"
                                        alt="View All"/> : <img src="../icons/view-incomplete.png" width="100" height="100"
                                        alt="View Incomplete"/>}
        </div>
    </footer>
}