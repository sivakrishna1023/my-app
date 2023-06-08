//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import About from './components/About';
import TextForm from './components/TextForm';


function App() {
  const [state,newstate]=useState('light');
  const convertor=()=>{
    if(state==='light'){
      newstate('dark');
      document.body.style.backgroundColor = '#050d10';
    }
    else{
      newstate('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
   <>
    <Navbar title="Text" about="about Us" mode={state} togglemode={convertor} />
    
    
    <TextForm heading="Enter the text to analyze" mode={state} togglemode={convertor}/>
   
    {/* <div className='container'>
      <About/>
    </div> */}
   </>
  );
}

export default App;
