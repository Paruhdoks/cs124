import xIcon from "./icons/x-icon.png";
import doneIcon from "./icons/edit-complete-icon.png";
import deleteIcon from "./icons/delete-icon.png";
import "./Alert.css";

export function Alert(props) {
    return <div className={"backdrop"}>
        <div className={props.modalClassName}>
            {props.children}
            <div className="alert-buttons">
                <img src={xIcon} alt="cancel" width="45px" height="45px"
                     onClick={props.onClose}/>
                {props.middleIcon}
                <img src={props.deleteAlert ? deleteIcon : doneIcon} alt="confirm delete" width="45px" height="45px"
                     onClick={() => {
                         props.onClose();
                         props.onOK();
                     }}/>
            </div>
        </div>
    </div>
}