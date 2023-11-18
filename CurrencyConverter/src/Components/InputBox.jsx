import React from "react";
import './InputBox.css'

function InputBox({
    label = "From",
    amount=1,
    onAmountChange,
    isAmountDisabled = false,
    currencyOptions =[],
    onOptionChange,
    CurrencySelect,
    isCurrencyDisabled = false
    

}){
    
    return(
        <>
            <div className="box">
                <div className="amount-section">
                    <label htmlFor="amount">{label}</label>
                    <input type="number"
                        placeholder="Amount"
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
                        value={amount} 
                        disabled={isAmountDisabled}  
                    />
                </div>
                <div className="currency-section">
                    <label >Currency Type</label>
                    <select
                        onChange={(e) => onOptionChange && onOptionChange(e.target.value)}
                        value={CurrencySelect}
                        disabled = {isCurrencyDisabled}
                    >
                        {currencyOptions.map((currency) => 
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        )}
                    </select>
                </div>
            </div>
        </>
    );        
}

export default InputBox