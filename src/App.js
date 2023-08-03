// import logo from './logo.svg';

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react'


function App() {
  const [mode,setMode] = useState('info');
  const toggleMode = ()=>{
    if(mode==='info'){
      setMode('dark');
      document.body.style.backgroundColor = '#181B1B';
      document.body.style.Color = 'black';
    }
    else{
      setMode('info');
      document.body.style.backgroundColor = '#fff';
    }

  }
  return (
    <>
  
<Navbar title="TextTally" Dropdown="Tools" mode={mode} toggleMode={toggleMode}  />
<div className="container">
  <TextForms heading="Enter Text to analyse*"/>
  </div>

    
    </>

      
  );
}

export default App;
