import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {InMemoryApp} from "./InMemoryApp";

const initialData = [
    {name: "Buy New John Grisham Book", id: generateUniqueID(), completed: false},
    {name: "Call Mom", id: generateUniqueID(), completed: false}
]


ReactDOM.render(
  <React.StrictMode>
    <InMemoryApp tasks = {initialData} />
  </React.StrictMode>,
  document.getElementById('root')
);
