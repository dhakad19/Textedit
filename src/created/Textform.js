import React, {useState} from 'react'
export default function Textform(props) {
    const clickupper=()=>{
       // console.log("upper case was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleonchange=(event)=>{
      //  console.log("on change");
        setText(event.target.value);
    }
    const clicklower=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    } 
    const clear=()=>{
      let newText="";
      setText(newText);
    }
   const [text, setText]=useState('');
  // setText("new text");
    
  return (
    <>
    <div className="container">
      <h1  className="head head1">{props.Heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleonchange} id="Mybox" rows="6"></textarea>
     </div>
     <button  className="btn btn-primary btn1" onClick={clickupper}>Convert to upper</button>
     <button className="btn btn-primary btn1" onClick={clicklower}>Convert to lower</button>
     <button className="btn btn-primary btn1 btn2" onClick={clear}>Clear</button>
   </div>
   <div className="container my-3">
          <h1 className="head">Summary</h1>
          <p>{text==""?0:text.split(" ").length} words and {text.length} characters</p>
          <h2  className="head">preview</h2>
          <p>{text}</p>
   </div>
   </>
  )
}
