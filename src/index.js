import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom'
import {FirebaseContext} from './Store/FirebaseContext'
import { Firebase } from "./firebase/Config";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{Firebase}}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FirebaseContext.Provider>
  </React.StrictMode>
);