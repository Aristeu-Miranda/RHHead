import React from "react";
import { DivCadastro } from '../../styled/styled'

export default function CriarConta(){
    return(
        <DivCadastro>
        <div id="corpo-cadas">
        <div id="container_daddy">
            <div id="titulo-cadas">
                <h3>Cadastro - Empresas</h3>
            </div>

            <form>
                <fieldset>
                    <div class="campo">
                        <label htmlFor="nome"><strong>Razão Social</strong></label>
                        <input class="input-cadas" type="text" name="razao" id="razao" required/>
                    </div>
                    <div class="campo">
                        <label htmlFor="cpf"><strong>CNPJ</strong></label>
                        <input class="input-cadas" type="text" name="cnpj" id="cnpj" required/>
                    </div>
                    <div class="campo">
                        <label htmlFor="telefone"><strong>Telefone</strong></label>
                        <input class="input-cadas" type="text" name="telefone" id="telefone" required/>
                    </div>
                    <div class="campo">
                        <label htmlFor="endereco"><strong>Endereço</strong></label>
                        <input class="input-cadas" type="text" name="endereco" id="endereco" required/>
                    </div>
                    <div class="campo">
                        <label htmlFor="email"><strong>E-mail</strong></label>
                        <input class="input-cadas" type="email" name="email" id="email"/>
                    </div>
                    <div class="campo">
                        <label htmlFor="password"><strong>Senha</strong></label>
                        <input class="input-cadas" type="password" name="password" id="password"/>
                    </div>
                    <button id="botao" type="submit">Finalizado</button>
                </fieldset>
            </form>
        </div>
    </div>
    </DivCadastro>
    )
}