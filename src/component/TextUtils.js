import React,{useState} from 'react'

function TextUtils(props) {

 const [text,setText] = useState("");

  const changeHandler = (e)=>{
    setText(e.target.value);
  }

  const clickHandlerForUpperCase = ()=>{
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("success", "converted to upper case");
  }

  const clickHandlerForlowerCase = ()=>{
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("success", "converted to lower case");
  }
  const clickHandlerForClearTxt = ()=>{
    setText("");
    props.showAlert("success", "text cleared");
  }
   const clickHandlerForCoppyTxt = ()=>{
    var txt = document.getElementById("myBox")
    txt.select()
    navigator.clipboard.writeText(txt.value)
    props.showAlert("success", "text coppied");
  }

  const extraSpaceHandler = ()=>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert("success", "spaces removed");
  }

 

  return (
    <div>
      <h1 style={{"color": props.mode==='dark'?'white': 'black'}}>{props.heading}</h1>
      <div className="mb-3">
       <textarea className= "form-control my-4" id ="myBox" rows="8" placeholder='type your txt here' value={text} onChange={changeHandler}
       style={{"backgroundColor": props.mode==='light'?'white':'grey', "color": props.mode==='dark'?'white':'black'}}  ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={clickHandlerForUpperCase}>convert to upper case</button>
      <button className="btn btn-primary mx-2" onClick={clickHandlerForlowerCase}>convert to lower case</button>
      <button className="btn btn-primary mx-2" onClick={clickHandlerForClearTxt}>clear text</button>
      <button className="btn btn-primary mx-2" onClick={clickHandlerForCoppyTxt}>coppy text</button>
      <button className="btn btn-primary mx-2" onClick={extraSpaceHandler}>remove extra space</button>

      <div className='container'>
       <h2 style={{"color": props.mode==='dark'?'white':'black'}}>Parameters</h2>
       <p>word count: {text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
       <p>character count: {text.length}</p>
       <p>read time: {0.008*text.split(' ').length}</p>
       <h2 style={{"color": props.mode==='dark'?'white':'black'}}>Preview</h2>
       <p style={{"color": props.mode==='dark'?'white':'black'}}>{text}</p>
      </div>
    </div>
  )
}

export default TextUtils
