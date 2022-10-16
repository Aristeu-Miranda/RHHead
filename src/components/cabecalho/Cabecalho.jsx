import { Link } from "react-router-dom";
import { Header } from "../../styled/styled"



export default function Cabecalho(){
  
    return(
        <Header>
            <h2><Link id="linkT" to="/">RH<p id="stitulo">Head</p></Link></h2>
                <ul id="servicos">
                    <li><Link id="links" to="/login">Login</Link></li>
                    <li><Link id="links" to="/cadastro">Cadastro</Link></li>
                    <li><Link id="links" to="/vagas">Vagas</Link></li>
                    <li><Link id="links" to="/empresas">Empresas</Link></li>
                </ul>
        </Header>
    )
}