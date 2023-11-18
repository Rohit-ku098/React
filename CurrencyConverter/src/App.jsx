import { useState } from 'react'
import './App.css'
import { InputBox } from './Components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyOptions = useCurrencyInfo(from)
  const option = Object.keys(currencyOptions)
  const convert = (val)=>{
    setConvertedAmount(amount * Number(currencyOptions[to]))
    console.log(currencyOptions[to])
  }
  
  function swap(){
    console.log(to)
    setTo(from)
    console.log(to);
    setFrom(to)
    setAmount(convertedAmount)
    setConvertedAmount(amount)

  }

  return (
    <>
      <div className="container">
        <div className="input">
          <InputBox
            label='From'
            amount={amount}
            CurrencySelect={from}
            currencyOptions={option}
            onOptionChange={(e)=>setFrom(e)}
            onAmountChange={(e)=>setAmount(e)}
          />
        </div>
        <div className="swap" onClick={swap}>
          swap
        </div>
        <div className="input">
          <InputBox
            label='To'
            amount={convertedAmount}
            currencyOptions={option}
            CurrencySelect={to}
            onOptionChange={(e)=>setTo(e)}
            isAmountDisabled
          />
        </div>
        
        <button 
          className='btn'
          onClick={convert}
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
      
    </>
  )
}

export default App
