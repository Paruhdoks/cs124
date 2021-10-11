import "./Alert.css";

export function Alert(props) {
    return <div className={"backdrop"}>
        <div className="modal">
            {props.children}
            <div className="alert-buttons">
                <img src="../icons/x-icon.png" alt="cancel" width="45px" height="45px"
                     onClick={props.onClose}/>
                <img src="../icons/delete-icon.png" alt="confirm delete" width="45px" height="45px"
                     onClick={() => {
                         props.onClose();
                         props.onOK();
                     }}/>
            </div>
        </div>
    </div>
}