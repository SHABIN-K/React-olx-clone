import React, { useContext, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import {Route, Routes} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from "./Pages/Login";
import Create from './Pages/Create'
import {AuthContext,FirebaseContext} from './Store/Context'
/**
 * ?  =====Import Components=====
 * 
 * 
 */


function App() {
  const {setUser} = useContext(AuthContext)
  const {Firebase} = useContext(FirebaseContext)

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    
  })
  
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="login" element={<Login/>} />
      <Route path="create" element={<Create/>} />
      </Routes>
    </div>
  );
}

export default App;
