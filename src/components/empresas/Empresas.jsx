import React from "react";
import { DivEmpresa } from "../../styled/styled";
import FIAP from './FIAP.jpg'
import IBM from './IBM_logo.jpg'

export default function Empresas(){
    return(
        <DivEmpresa>
            <div>
                <h3 id="titulo">Confira algumas empresas que apoiam nosso projeto!</h3>
            </div>
            <section>
                <div id="empresa">
                    <img src={FIAP} alt="imagem logo FIAP Faculdade" />
                    <p>Faculdade de Informatica e Administração Paulista - FIAP</p>
                </div>
                <div id="empresa">
                    <img src={IBM} alt="imagem logo IBM" height={157} />
                    <p>International Business Machines Corporation - IBM</p>
                </div>
            </section>
            <div id="contato">
                <p>Quer fazer parte? Envie seu e-mail que entraremos em contato</p>
                <div>
                    <input  id="email" placeholder="Email" autocomplete="off" type="email" tabindex="1" autofocus required />
                    <input type="submit" value="Enviar" />
                </div>
            </div>
        </DivEmpresa>
    )
}