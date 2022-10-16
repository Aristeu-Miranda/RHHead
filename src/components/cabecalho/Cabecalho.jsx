import { Link } from "react-router-dom";
import './Cabecalho.css'

export default function Cabecalho(){

    const linkT={
        color: "black",
        textDecoration: "none"
    }
    const linkC={
        textDecoration: "none",
        color: 'white',
        backgroundColor: '#0500FF',
        padding: '5px',
        borderRadius: '30px',
    }

    const link={
        textDecoration: "none",
        color: '#7a7a7a',
        paddingRight: '14px'
    }
    
    return(
        <header>
            <h2><Link style={linkT} to="/">RH<p id="stitulo">Head</p></Link></h2>
                <ul id="servicos">
                    <li><Link style={link} to="/vagas">Vagas</Link></li>
                    <li><Link style={link} to="/empresas">Empresas</Link></li>
                    <li><Link style={link} to="/entrevistas">Entrevistas</Link></li>
                    <div>
                        <li><Link style={link} to="/login">Login</Link></li>
                        <li><Link style={linkC} to="/cadastro">Cadastro</Link></li>
                    </div>
                </ul>
        </header>
    )
}