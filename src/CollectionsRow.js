import deleteIcon from "./icons/delete-icon.png";
import "./CollectionsRow.css";

export function CollectionsRow(props) {
    return <li key={props.name}
                className="collection-row"
                >
        <button tabIndex={1} onClick={() => props.setSelectedCollection(props.name)} aria-label={"List,  " + props.name + (props.selected ? "; Currently Selected" : "; Select List") }><span className={props.selected ? "highlighted small-caps" : "small-caps"}>{props.name}</span></button>
        { !props.selected && <button tabIndex={1} onClick={props.onDelete} aria-label={"Delete List, " + props.name }><img src={deleteIcon} alt="cancel" width="45px" height="45px"
             /></button>}
    </li>
}