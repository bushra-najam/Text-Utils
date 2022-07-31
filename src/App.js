import About from "./component/About";
import Navbar from "./component/Navbar";
import TextUtils from "./component/TextUtils";
import React, {useState} from 'react'
import Alert from "./component/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode==="light"){
       setMode("dark")
       document.body.style.backgroundColor = '#042743'
       showAlert("success","Dark mode has been enabled");
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("success","Light mode has been enabled")
    }
 }

  const showAlert = (type,message)=>{
     setAlert({
      message: message,
      type: type
     })

     setTimeout(()=>{
      setAlert(null)
     },1500)
  }

  return (
    <div className="App" >
     <Router>
      <Navbar mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
            <Route exact path="/" element = {<TextUtils heading = "Enter The Text To Analyze Below" mode ={mode} showAlert={showAlert}/>}/>
            <Route exact path="/about" element = {<About/>}/>
        </Routes>
      </div>
     </Router>
    </div>
  );
}

export default App;
