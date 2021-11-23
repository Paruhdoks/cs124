import './SortBar.css';
import {useState} from "react";
import sortIcon from "./icons/sort-icon.png";
import sortCompleteIcon from "./icons/sort-complete-icon.png";

export function SortBar(props) {
    const [sorting, setSorting] = useState(false);
    const [sortString, sortDirection] = props.sortOptions;

    const imgSize = "40px";
    return <div id={"sort-bar"} tabIndex={0}>
        {sorting && <button onClick={() => props.setSortOptions([sortString, sortDirection === "asc" ? "desc": "asc"])} aria-label={"Toggle Sort Direction; Current Sort direction, " + sortDirection + "ending"}><div className={"current-sort"}>{sortDirection === "asc" ? "↑" : "↓"}</div></button>}
        {sorting &&
        ["created", "name", "priority"].map((s) => <button key={s} onClick={()=>props.setSortOptions([s, sortDirection])} aria-label={sortString === s ? "Current Sort Method; Method, " + s : "Change Sort Method; Method, " + s}><div id={s}
                                                                    className={sortString === s ? "current-sort" : ""}>{s}</div></button>)}
        <button onClick={() => setSorting(!sorting)} aria-label={sorting ? "Close sort menu" : "open sort menu"}><img src={sorting ? sortCompleteIcon : sortIcon} alt="sort" width={imgSize} height={imgSize}
            /></button>
    </div>
}