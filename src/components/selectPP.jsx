import "../../styles/selectPP.css"
import React from "react"
function SelectPP() {
    return ( 
        <>
            <div className="button-container">
                <button onclick="toggleColor(1)" className="button">Botón 1</button>
                <button onclick="toggleColor(2)" className="button">Botón 2</button>
            </div><script src="script.js"></script>
        </>
    )
}
export default SelectPP;