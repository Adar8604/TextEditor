import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  const [mode, setMode] = useState('dark');

  let darkmode={
    backgroundColor:'#02021be0',
    color:'white',
    height:'100vh',
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <div style={darkmode}>
    <Navbar title="Text Editor" mode={mode} toggleMode={toggleMode} key={new Date()}/>
    <div className='container' >
    <Textform/>
    </div>
    </div>
    </>
  );
}

export default App;
