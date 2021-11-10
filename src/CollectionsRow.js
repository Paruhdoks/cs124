import deleteIcon from "./icons/delete-icon.png";

export function CollectionsRow(props) {
    return <li key={props.name}
                className={props.selected ? "highlighted small-caps" : "small-caps"}>
        <span onClick={() => props.setSelectedCollection(props.name)}>{props.name}</span>
        { !props.selected && <img src={deleteIcon} alt="cancel" width="45px" height="45px"
             onClick={props.onDelete}/>}
    </li>
}