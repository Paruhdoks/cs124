import './LogoutBar.css';
import userIcon from "./icons/person-icon.png";

export function LogoutBar(props) {


    const imgSize = "40px";
    return <div id={"logout-bar"} tabIndex={0}>
        <div>{props.email}</div>
        <div id={"logout-group"}>
        <label htmlFor={"logout"}>Logout</label>
        <button id={"logout"} name={"logout"} onClick={props.logOut} aria-label={"Log Out"}><img src={userIcon} alt="logout" width={imgSize} height={imgSize}
            /></button></div>
    </div>
}