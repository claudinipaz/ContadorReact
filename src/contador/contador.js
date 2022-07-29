import React from "react"
import "../App.css"
import "../style-sheet/contador.css"


function Boton({texto, botonClick, manejarClick}){
    return(
        <button className={botonClick ? "boton-click": "boton-reinicio"}
        onClick={manejarClick}>
            {texto}
        </button>
    );

}
export default Boton