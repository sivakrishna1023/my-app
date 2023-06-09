//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [state,newstate]=useState('light');
  const [state1,newstate1]=useState('light');
  const [alert,newalert]=useState(null);
  const showmeassge=(title,message)=>{
       newalert({
        title: title,
        message:message 
       })
       setTimeout(() => {
        newalert(null);
       },3000);
  }
  const convertor=()=>{
    if(state==='light'){
      newstate('dark');
      newstate1('dark');
      document.body.style.backgroundColor = '#050d10';
      showmeassge('success','Dark Mode Enabeled')
      //document.title='In dark mode';
    }
    else{
      newstate('light');
      newstate1('light');
      document.body.style.backgroundColor = 'white';
      showmeassge('success','Light Mode Enabeled')
      //document.title='In Light mode';
    }
  }
  const convert2=()=>{
       if(state1==='light'){
          newstate('dark');
          newstate1('#1e4d2b');
          document.body.style.backgroundColor='#1e4d2b';
          showmeassge('success','Green Mode Enabeled')
       }
       else{
        newstate('light')
        newstate1('light');
          document.body.style.backgroundColor='white';
          showmeassge('success','Green Mode disabeled')
       }
  }
  return (
   <>
    <Navbar title="Text" about="about Us" mode={state} mode1={state1}togglemode={convertor} togglemode2={convert2}/>
    <Alert/>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<TextForm  showmeassge={showmeassge}  heading="Enter the text to analyze" mode={state} togglemode={convertor} togglemode2={convert2}/>
} />
        <Route path="/about" element={<div className='container'>
      <About/>
    </div> } />
      </Routes>
    </BrowserRouter>
    
    {/* <TextForm  showmeassge={showmeassge}  heading="Enter the text to analyze" mode={state} togglemode={convertor} togglemode2={convert2}/> */}
    {/* <About/> */}
    {/* <div className='container'>
      <About/>
    </div> */}
   </>
  );
}

export default App;
