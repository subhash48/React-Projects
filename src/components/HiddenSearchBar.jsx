import { useState } from "react"
import "../style.css"
import { FaSearch } from "react-icons/fa";


const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false);
    const [bg, setBg] = useState("white")
    
   const handleClick = (e) => { 
    setBg("#1a1a1a")
    if (e.target.className === "container") {
    setShowInput(false)
    setBg("white")
}
}
  return (
     <section className="container" style={{backgroundColor: bg}} onClick={handleClick}>
        {showInput ? (<input type="text" placeholder="Search Item"/>) : (<FaSearch onClick={() => setShowInput(true)}/>) }
     </section>
  )
}

export default HiddenSearchBar