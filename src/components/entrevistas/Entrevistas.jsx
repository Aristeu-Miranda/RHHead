import React from "react";
import './entre.css'

export default function Entrevista(){
    return(
        <div id="container-entre">
            <h3>Buscar entrevistas</h3>
            <form id="form-entre">
                <input type="text" name="entrevista" id="entrevista" placeholder="Cargo ou empresa" />
                <input type="submit" name="btn" value="Buscar" id="sub" />
            </form>
        </div>
    )
}