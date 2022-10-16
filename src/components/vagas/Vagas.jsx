import React from "react";
import Programador from './programador.jpg';
import UX from './medicina.jpg';
import Financeiro from './financeiro.jpeg';
import Adm from './administrativo.jpg';
import { DivVagas } from '../../styled/styled'

export default function Vagas(){
    return(
        <DivVagas>
            <div>
                <h3 id="tituloVagas">Confira algumas vagas abertas em nossa plataforma!</h3>
            </div>
            <section id="vagas">
            <div id="exeVaga">
                <div class="txt">
                    <img class="img" src={Programador} alt="Imagem da vaga de programador" width="30%"/>
                    <h3>Desenvolvedor Front-End React.JS</h3>
                    <ul class="lista-vagas">
                        <li>Salário: R$2.000 - R$3.300</li>
                        <li>Local: São Paulo/SP</li>
                        <li>Nivel: Júnior</li>
                    </ul>
                </div>
            </div>
            <div id="exeVaga">
                <div class="txt">
                    <img class="img" src={Financeiro} alt="Imagem setor financeiro" width="20%"/>
                    <h3>Auxiliar de Analista Financeiro</h3>
                    <ul class="lista-vagas">
                        <li>Salário: R$1.800 - R$2.500</li>
                        <li>Local: São Paulo/SP</li>
                        <li>Financeiro / Administrativo</li>
                    </ul>
                </div>   
            </div>
            <div id="exeVaga">
                <div class="txt">
                    <img class="img" src={UX} alt="Imagem de vaga para UX Design" width="20%"/>
                    <h3>UX Design - Setor Criativo</h3>
                    <ul class="lista-vagas">
                        <li>Salário: R$2.500 - R$4.000</li>
                        <li>Local: São Paulo/SP</li>
                        <li>Nivel: Pleno</li>
                    </ul>
                </div>
            </div>
            <div id="exeVaga">
                <div class="txt">
                    <img class="img" src={Adm} alt="Imagem de vaga para Administrativo" width="20%"/>
                    <h3>Auxiliar Administrativo</h3>
                    <ul class="lista-vagas">
                        <li>Salário: R$1.300 - R$1.700</li>
                        <li>Local: São Paulo/SP</li>
                        <li>Nivel: Junior / Auxilizar</li>
                    </ul>
                </div>
            </div>
        </section>

        </DivVagas>
        
    )
}