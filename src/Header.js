import './Header.css';

export function Header(props) {
    return <header>
        <button onClick={props.onClick} tabIndex={0} aria-label={"Current List, " + props.title + "; Open Change List Menu"}><h1> {props.title} <span id=
        "header-triangle">▼</span> </h1></button>
    </header>
}