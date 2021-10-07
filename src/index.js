import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
