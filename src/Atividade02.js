import {Link} from "react-router-dom";
import Contador from "./Contador";

export default function Atividade02(){
    return(
        <>
            <h1> Atividade 2 </h1>
            <Contador/>
            <Link to="/">Voltar</Link>
        </>
    )
}