import React from 'react';
import './App.css';
import Home from './Pages/Home';
import {Route, Routes} from 'react-router-dom'
import Signup from './Pages/Signup'


/**
 * ?  =====Import Components=====
 */


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
