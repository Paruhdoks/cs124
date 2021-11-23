import xIcon from "./icons/x-icon.png";
import doneIcon from "./icons/check-icon.png";
import deleteIcon from "./icons/delete-icon.png";
import "./Alert.css";
import {useEffect, useRef} from "react";

export function Alert(props) {
    const firstRef = useRef();
    const lastRef = useRef();
    useEffect(() => firstRef.current.focus(), []);

    return <div className={"backdrop"} tabIndex={-1}>
        <div className={props.modalClassName} tabIndex={1} ref={firstRef} id={"collection-modal"}
             onKeyDown={e => {
                 if (e.key === "Tab" && e.shiftKey && e.target.id === "collection-modal") {
                     e.stopPropagation();
                     e.preventDefault();
                     setTimeout(() => {
                         if (lastRef.current) {
                             lastRef.current.focus();
                         }
                     }, 0);
                 }
             }}>
            {props.children}
            <div className="alert-buttons">
                <button onClick={props.onClose} tabIndex={1}><img src={xIcon} alt="cancel"
                                                                                       width="45px" height="45px" aria-label={"Close Pop-up"}
                /></button>
                {props.middleIcon && <button tabIndex={1} onClick={props.middleIconOnClick} aria-label={"Add new list"}>{props.middleIcon}</button>}
                <button tabIndex={1}
                        ref={lastRef}
                        aria-label={"Confirm"}
                        onClick ={() => {
                            props.onClose();
                            props.onOK();
                        }}
                        onKeyDown={e => {
                            if (e.key === "Tab" && !e.shiftKey) {
                                setTimeout(() => {
                                    if (firstRef.current) {
                                        firstRef.current.focus();
                                    }
                                }, 0);
                            }
                        }}
                ><img src={props.deleteAlert ? deleteIcon : doneIcon} alt="confirm delete" width="45px" height="45px"
                /></button>
            </div>
        </div>
    </div>
}