import './Task.css';

export function Task(props) {
    return <li>
        <label htmlFor={props.id}>
            <input type="checkbox" id={props.id} name={props.id} onChange={props.clickHandler} checked={props.completed}/>
            <div className="checkbox"></div>
            <span className="label-text">{props.name}</span>
        </label>
        <div className="edit-delete">
            <div><img src="../icons/edit-icon.png" alt="edit item" width="75" height="75"/></div>
            <div><img src="../icons/delete-icon.png" alt="delete item" width="75" height="75"/></div>
        </div>
    </li>
}