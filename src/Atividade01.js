import {Link} from "react-router-dom";
import Relogio from "./Relogio";
import Letreiro from "./Letreiro";

export default function Atividade01(){
    return(
        <>
            <h1> Atividade 1 </h1>
            <Relogio/>
            <Letreiro frase="Conheça a Fatec..."/>
            <Link to="/">Voltar</Link>
        </>
    )
}