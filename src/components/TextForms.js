
import React, {useState } from 'react';

export default function TextForms(props) {
    const [text, setText] = useState('Enter text here');
    

    const ToUpperCase = ()=>{
        // console.log(" toUppercase");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const ToLowerCase = ()=>{
        // console.log(" toLowercase");
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clearText = ()=>{
        // console.log(" toLowercase");
        let newText = " ";
        setText(newText)
    }
    const handlecopy = ()=>{
      var Text= document.getElementById("exampleFormControlTextarea1");
      Text.select();
      navigator.clipboard.writeText(Text.value);
    }
    const handleExtraSpace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }

    const handleOnChange = (event)=> {
        console.log("On change");
        setText(event.target.value);
    }

    
  return (
    <div>
    <form>
    <h6 className="text-center my-3">{props.heading}</h6>
    <div className="form-group text-center">
   
    <textarea className="form-control text_input shadow p-3 mb-5 bg-primary rounded bg-light " id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
  </div>
  <div className="text-center">
  <button type="button" className="btn btn-primary m-1 " onClick ={ToUpperCase} >Uppercase</button>
  <button type="button" className="btn btn-primary m-1" onClick ={ToLowerCase} >Lowercase</button>
  <button type="button" className="btn btn-primary m-1" onClick ={clearText} >Clear</button>
  <button type="button" className="btn btn-primary m-1" onClick ={handlecopy} >Copy</button>
  <button type="button" className="btn btn-primary m-1" onClick ={handleExtraSpace} >Clear Space</button>
</div>

<div className="container my-3">
  <h4>Text summary</h4>
  <p>{text.split("").length} Words and {text.length} Characters</p>
</div>
  
</form>

    </div>
  )
}
