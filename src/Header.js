import './Header.css';

export function Header(props) {
    return <header>
        <h1 onClick={props.onClick}> {props.title} <span id=
        "header-triangle">▼</span> </h1>
    </header>
}