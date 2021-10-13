import "./Alert.css";
import xIcon from "./icons/x-icon.png";
import deleteIcon from "./icons/delete-icon.png";

export function Alert(props) {
    return <div className={"backdrop"}>
        <div className="modal">
            {props.children}
            <div className="alert-buttons">
                <img src={xIcon} alt="cancel" width="45px" height="45px"
                     onClick={props.onClose}/>
                <img src={deleteIcon} alt="confirm delete" width="45px" height="45px"
                     onClick={() => {
                         props.onClose();
                         props.onOK();
                     }}/>
            </div>
        </div>
    </div>
}