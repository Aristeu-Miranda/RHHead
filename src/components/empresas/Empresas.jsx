import React from "react";
import Pasta from './pasta.png'
import Empresa from './empresa.png'
import Candidatos from './candidatos.png'
import './Empresas.css'

export default function Empresas(){
    return(
        <div id='container-father'>
            <div id="container">
                <div id="Vagas" className="container-item">
                    <img src={Pasta} alt="Imagem de uma pasta" width="40px"/>
                    <h3>Vagas</h3>
                    <ul class="lista-empresa">
                        <li>Desenvolvedor fron-end</li>
                        <li>Desenvolvedor back-end</li>
                        <li>Full-stack</li>
                    </ul>
                    <h4>5 mil</h4>
                </div> 
                <div id="Candidatos" className="container-item">
                    <img src={Candidatos} alt="Imagem de um gurpo de candidatos" width="40px"/>
                    <h3>Candidatos</h3>
                    <ul class="lista-empresa">
                        <li>2.000 - Para front-end</li>
                        <li>1.000 - Para back-end</li>
                        <li>2.000 - Para full-stack</li>
                    </ul>
                </div>
                <div id="Perfil" className="container-item">
                    <img src={Empresa} alt="Imagem de uma empresa" width="40px"/>
                    <h3>Perfil da Empresa</h3>
                    <h4>Mais de 254 mil contratados</h4>
                    <p>O lugar perfeito para sua carreira <br /> só pode ser feito com você.</p>
                </div>
            </div>
        </div>
    )
}