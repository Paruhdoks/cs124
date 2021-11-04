import './SortBar.css';
import {useState} from "react";
import sortIcon from "./icons/sort-icon.png";

export function SortBar(props) {
    const [sorting, setSorting] = useState(false);
    const [sortString, sortDirection] = props.sortOptions;

    const imgSize = "40px";
    return <div id={"sort-bar"}>
        {sorting && <div className={"current-sort"} onClick={() => props.setSortOptions([sortString, sortDirection === "asc" ? "desc": "asc"])}>{sortDirection === "asc" ? "↑" : "↓"}</div>}
        {sorting &&
        ["created", "name", "priority"].map((s) => <div key={s} id={s}
                                                                 onClick={()=>props.setSortOptions([s, sortDirection])}
                                                                 className={sortString === s ? "current-sort" : ""}>{s}</div>)}
        <img src={sortIcon} alt="sort" width={imgSize} height={imgSize}
             onClick={() => setSorting(!sorting)}/>
    </div>
}