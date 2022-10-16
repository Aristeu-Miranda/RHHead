import React from "react";
import './login.css'

export default function Login(){
    return(
        <div id="corpo-login">
            <div id='formulario'>
                <div>
                    <h3 id="titulo-login">Login</h3>
                </div>

                <form>
                    <fieldset>
                        <div class="campo-login">
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input class="input-login" type="email" name="email" id="email"/>
                        </div>
                        <div class="campo-login">
                            <label htmlFor="password"><strong>Senha</strong></label>
                            <input class="input-login" type="password" name="password" id="password"/>
                        </div>
                        <button id="botao-login" type="submit" className="button">Entrar</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}