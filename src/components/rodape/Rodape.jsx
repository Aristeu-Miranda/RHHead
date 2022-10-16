import React from "react";
import { Footer } from "../../styled/styled";
import { Link } from "react-router-dom";

export default function Rodape(){
    return(
        <Footer>
            <div id="corpo">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>RHHead</h4>
                            <ul class="ul-rodape">
                                <li><Link id="links" to="/sobre">Sobre Nós</Link></li>
                                <li><a href="#">Fale conosco</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Empresas</h4>
                            <ul class="ul-rodape">
                                <li><a href="#">Criar conta</a></li>
                                <li><a href="#">Área da empresa</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Trabalhe conosco</h4>
                            <ul class="ul-rodape">
                                <li><a href="#">Anunciantes</a></li>
                                <li><a href="#">Desenvolvedores</a></li>
                                <li><a href="#">Carreiras</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </Footer>
        
    )
}