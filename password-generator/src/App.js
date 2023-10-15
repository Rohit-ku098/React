import { useState, useCallback, useEffect, useRef } from "react";
import './App.css';


function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const [pass, setPassword] = useState("");
  
  
  const passwordGenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()-=_+{}[]':;/";
    let pass = "";

    for(let i=0; i<length;i++)
    {
      pass += str[Math.floor(Math.random()*str.length)];
    }
    setPassword(pass);
  
  },[length, numAllowed, charAllowed, setPassword]);
  

  //Calling password Generator on change done by user
  useEffect(()=>{
    passwordGenerator();
    setCopy("Copy")
  },[length, charAllowed, numAllowed, passwordGenerator])

  //Copy password
  let [copy, setCopy] = useState("Copy")
  const passRef = useRef()
  const copyPassword =()=>{
    passRef.current?.select()    
    window.navigator.clipboard.writeText(pass)
    setCopy("Copied")
  }

  return (
    <>
      <div className = 'container'>
        <div className="txt1">Password Generator</div>
        <div className="inputContainer">
          <input type="text" 
          value={pass} 
          readOnly 
          placeholder="password"
          className="input"
          ref={passRef}
          />
          <button className="copybtn"
            onClick={copyPassword}
          >{copy}</button>
        </div>


        <div className="inputContainer2">  
          <input type="range"
            min={6}
            max={30}
            onChange={(e)=>{setLength(e.target.value)}}
            value={length}
          />
          <label className="input-txt">{length}</label>
          
          
          <label className="input-txt">
            
          <input
            type="checkbox"
            defaultChecked={setNumAllowed}
            onChange={()=>{
              setNumAllowed((prev)=>!prev)
            }}
          />
            Number</label>
          
          
          <label className="input-txt">
          <input
            type="checkbox"
            
            defaultChecked={setCharAllowed}
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}  
          />
            Character</label>
          
        </div>
                    
      </div>
    </>
  );
}

export default App;
