import React, { useState } from "react"
import "../style.css";


const Counter = () => {
    const [value, setValue] = useState(0);

  return (
    <div>

        <div className="container">
            <h1 className="number">{value}</h1>
        </div>

        <div className="btns-container">
            <button className="increment" onClick={() => setValue(value+1)}>+</button>
            <button className="increment" onClick={() => setValue(value-1)}>-</button>
        </div>

    </div>
  )
}

export default Counter