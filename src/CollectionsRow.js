import deleteIcon from "./icons/delete-icon.png";
import shareIcon from "./icons/share-icon.png";
import "./CollectionsRow.css";
import {useState, useEffect, useRef} from "react";
import TextareaAutosize from "react-textarea-autosize";

export function CollectionsRow(props) {
    let [email, setEmail] = useState("");
    let [shared, setShared] = useState(false);
    const emailInput = useRef(null);

    useEffect(() => {
        if (shared) {
            emailInput.current.focus();
            emailInput.current.scrollIntoView();
        }
    }, [shared])

    return <li key={props.name}
               className="collection-row"
    >
        <button tabIndex={1} onClick={() => props.setSelectedCollection(props.name)}
                aria-label={"List,  " + props.name + (props.selected ? "; Currently Selected" : "; Select List")}><span
            className={props.selected ? "highlighted small-caps" : "small-caps"}>{props.name}</span></button>
        <button tabIndex={1} onClick={() => setShared(true)}
                aria-label={"Share List"}><img src={shareIcon}
                                                alt="share"
                                                width="45px"
                                                height="45px"
        /></button>
        {shared &&
        <TextareaAutosize key={"edit"} value={email} ref={emailInput}
                          onChange={(e) => setEmail(e.target.value)}
                          onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                  e.stopPropagation();
                                 emailInput.current.blur();
                              }
                          }}
                          onBlur={(e) => {
                              setShared(false);
                              props.onShared(email);
                          }}
        />}
        {!props.selected &&
        <button tabIndex={1} onClick={props.onDelete} aria-label={"Delete List, " + props.name}><img src={deleteIcon}
                                                                                                     alt="cancel"
                                                                                                     width="45px"
                                                                                                     height="45px"
        /></button>}
    </li>
}