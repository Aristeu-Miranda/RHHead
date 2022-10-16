import React from "react";
import { Form } from '../../styled/styled'

export default function Login(){
    return(
        <Form>
            <div id="corpo_login">
                <form id="formulario" action="#" method="post">
                    <div>
                        <legend><h2>LOGIN</h2></legend>
                    </div>
                    <fieldset>
                        <div class="input-group">
                            <span><i class="fa fa-envelope-o"></i></span>
                            <input  id="email" placeholder="Email" autocomplete="off" type="email" tabindex="1" autofocus required />
                        </div>
                        <div class="input-group">
                            <span><i class="fa fa-key"></i></span>
                            <input placeholder="Senha" type="password" enable />
                        </div>
                        <input type="submit" value="Enviar" />
                </fieldset>
                </form>
            </div>    
        </Form>
    )
}