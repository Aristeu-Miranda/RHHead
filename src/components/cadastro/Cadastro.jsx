import React from "react";
import { DivCadastro } from '../../styled/styled'

export default function Cadastro(){

    return(
        <DivCadastro>
            <div id="corpo-cadas">
            <div id="container_daddy">
                <div id="titulo-cadas">
                    <h3>CADASTRO</h3>
                </div>

                <form>
                    <fieldset>
                        <div class="campo">
                            <label htmlFor="nome"><strong>Nome</strong></label>
                            <input class="input-cadas" type="text" name="nome" id="nome" required/>
                        </div>
                        <div class="campo">
                            <label htmlFor="sobrenome"><strong>Sobrenome</strong></label>
                            <input class="input-cadas" type="text" name="sobrenome" id="sobrenome" required/>
                        </div>
                        <div class="campo">
                            <label htmlFor="cpf"><strong>CPF</strong></label>
                            <input class="input-cadas" type="text" name="cpf" id="cpf" required/>
                        </div>

                        <div class="campo">
                            <label htmlFor="rg"><strong>RG</strong></label>
                            <input class="input-cadas" type="text" name="rg" id="rg" required/>
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