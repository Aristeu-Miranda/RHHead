import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cabecalho from "./components/cabecalho/Cabecalho";
import Home from "./components/home/Home";
import Rodape from './components/rodape/Rodape';

import Vagas from './components/vagas/Vagas'
import Empresas from './components/empresas/Empresas'
import Entrevistas from './components/entrevistas/Entrevistas'
import Login from './components/login/Login'
import Cadastro from './components/cadastro/Cadastro'
import Sobre from './components/sobre/Sobre'

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Cabecalho/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/vagas" element={<Vagas/>}/>
                    <Route path="/empresas" element={<Empresas/>}/>
                    <Route path="/entrevistas" element={<Entrevistas/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                    <Route path="/sobre" element={<Sobre/>}/>
                </Routes>
                <Rodape/>
            </BrowserRouter>
        </>
    )
}