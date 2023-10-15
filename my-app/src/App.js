import { useState } from 'react';
import Header from './components/Header';
function App() {
  
  let [counter, setCounter] = useState(5);
  const increaseValue = ()=>{
    setCounter(counter+1);
  }
  const decreaseValue = ()=>{
    setCounter(counter-1);
  }
  return (
    <>
      <Header Title="Title"/>
      <div className='container bg-green-400 border border-3 border-red-500'>
        <h1 className="m-4 font-bold text-xl ">Counter</h1>
        <h3>{counter}</h3>
        <button onClick={increaseValue}>Increase</button>
        <button onClick={decreaseValue}>Decrease</button>
      </div>
      

    </>
  );
}

export default App;
