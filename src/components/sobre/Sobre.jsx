import React from "react";
import { DivSobre } from '../../styled/styled'

export default function Sobre(){
    return(
        <DivSobre>
            <div id="titulo">
                <h3>Sobre Nós</h3>
            </div>
            <div id="descricao">
                <p>
                    Em 2022, essa startup foi desenvolvida através de um projeto acadêmico
                    proposto para melhorar o sistema de contratação on-line, que vem sendo o principal meio de 
                    no qual candidatos buscam vagas no mercado de trabalho.
                    <br/>Pensando nisso, como todos nós já passamos pela frustante processo seletivo no qual preenchemos 
                    diversas etapas e se quer tivemos algum retorno, nossa plataforma visa agendar entrevistas atráves 
                    apenas de suas qualidades e os requisitos definidos pelas empresas, assim, evitando na plataforma um 
                    processo genérico no qual o candidato não consegue expor suas qualidades e pensamentos ao recrutador.
                </p>
            </div>
        </DivSobre>
    )
}