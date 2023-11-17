import '../../styles/barraS.css'
import React from "react"
function Barra() {
    return ( 
        <>
            <div className="search-container">
            <input type="text" id="search-input" placeholder="Buscar..."/>
            <button id="search-button"></button>
            </div>
        </>
    )
}
export default Barra;