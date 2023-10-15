
import './App.css';
import { useState } from "react";

function App() {
  const [newColor, setColor] = useState("red");
  
  return (
    <>
      <div className='container' style={{backgroundColor:newColor}}>
        <div id="color-box" >
          <div className='red Colors' onClick={()=>setColor("red")} >Red</div>
          <div className='green Colors'onClick={()=>setColor("green")}>Green</div>
          <div className='yellow Colors'onClick={()=>setColor("yellow")}>Yellow</div>
          <div className='blue Colors'onClick={()=>setColor("blue")}>Blue</div>
          <div className='purple Colors' onClick={()=>setColor("purple")}>Purple</div>
          <div className='gray Colors' onClick={()=>setColor("gray")}>Gray</div>
          
        </div>
      </div>
    </>
    
  );
}

export default App;
