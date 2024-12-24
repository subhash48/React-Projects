import { useState } from "react"
import "../style.css"

const ToggleBackgroundColor = () => {

  const [backgroundColor, setBackgroundColor] = useState("white")
  const [textColor, setTextColor] = useState("#1b1b1b")
  const [button, setButton] = useState("white")

   const handleEvent = () => {
         setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white")
         setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b")
         setButton(backgroundColor === "white" ? "#1b1b1b" : "white")
   }



  return (
    <div style={{backgroundColor, color: textColor, }}>

        <button 
            style={{button, color: textColor, border: `2px solid ${textColor}`}}
            onClick={handleEvent}>
            {backgroundColor === "#1b1b1b" ? "Dark Theme" : "White Theme"}
        </button>
        <section className="content">
            <h1>Hello Subhash</h1>
            <h1></h1>
        </section>

    </div>
  )
}

export default ToggleBackgroundColor;