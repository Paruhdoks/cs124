import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AuthApp} from "./FirestoreApp";


ReactDOM.render(
  <React.StrictMode>
    <AuthApp />
  </React.StrictMode>,
  document.getElementById('root')
);
