import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import Context, {FirebaseContext} from './Store/Context'
import { Firebase } from "./firebase/Config";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{Firebase}}>
    <Context>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>
);