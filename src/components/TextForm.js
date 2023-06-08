import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,settext]=useState('Enter the text here');
  const handleupclick = ()=>{
    console.log("Uppercase button clicked", text);
    let newtext=text.toUpperCase();
    settext(newtext);
  }
  const handleonchange = (event)=>{
    console.log("you are entered....!");
    settext(event.target.value);
  }
  const clearer=()=>{
    let newtext3="";
    settext(newtext3);
  }
  const handledownclick =()=>{
    console.log("clicked the tolower button", text);
    let newtext1=text.toLowerCase();
    settext(newtext1);
  }
  const copytext=()=>{
    console.log('i am copying...!!');
    let text=document.getElementById('mytext');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handlespace=()=>{
    console.log('i am handling spaces');
    let text1=text.split(/[ ]+/);
    settext(text1.join(" "));
  }
  return (
    
        <>
        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
       
          <textarea className={`form-control  pl-10 pr-10 bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handleonchange} id="mytext" cols="6" rows="12"></textarea>
       
        <button className="btn btn-primary mt-1 mx-1" onClick={handleupclick}> Convert to capital </button>
        <button className="btn btn-primary mt-1 mx-1" onClick={handledownclick}> Convert to Small </button>
        <button className="btn btn-primary mt-1 mx-1" onClick={clearer}> clear text </button>
        <button className="btn btn-primary mt-1 mx-1" onClick={copytext}> copy </button>
        <button className="btn btn-primary mt-1 mx-1" onClick={handlespace}> Handle spaces </button>
          <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
          <h1>Your summary </h1>
          <p> {text.split(" ").length} words, {text.length} letters </p>
          <p> {0.08* text.split(" ").length} Minutes </p>
          <h2>Preview</h2>
          <p>{text}</p>
          </div>
          </div>
          
        </>
       
  )
}
