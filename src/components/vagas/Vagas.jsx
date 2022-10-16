import React from "react";
import Programador from './programador.jpg'
import Medicina from './medicina.jpg'
import Financeiro from './financeiro.jpeg'
import './Vagas.css'

export default function Vagas(){
    return(
        <section id="vagas">
            <div id="programador">
                <div class="txt">
                    <img class="img" src={Programador} alt="Imagem da vaga de programador" width="30%"/>
                    <h3>Vaga de programador Jr</h3>
                    <ul class="lista-vagas">
                        <li>Salário: R$4500-R$5300</li>
                        <li>Local: São Paulo/SP</li>
                        <li>Front-end</li>
                    </ul>
                    <button class="btn">Descrição da vaga</button>
                </div>
            </div>
            <div id="financeiro">
                <div class="txt">
                    <img class="img" src={Financeiro} alt="Imagem da vaga de programador" width="20%"/>
                    <h3>Vaga de programador Jr</h3>
                    <ul class="lista-vagas">
                        <li>Salário: R$4500-R$5300</li>
                        <li>Local: São Paulo/SP</li>
                        <li>Front-end</li>
                    </ul>
                    <button class="btn">Descrição da vaga</button>
                </div>   
            </div>
            <div id="medicina">
                <div class="txt">
                    <img class="img" src={Medicina} alt="Imagem da vaga de programador" width="20%"/>
                    <h3>Vaga de programador Jr</h3>
                    <ul class="lista-vagas">
                        <li>Salário: R$4500-R$5300</li>
                        <li>Local: São Paulo/SP</li>
                        <li>Front-end</li>
                    </ul>
                    <button class="btn">Descrição da vaga</button>
                </div>
            </div>
        </section>
    )
}