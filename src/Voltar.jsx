import {Link} from "react-router-dom";
import Back from './botao-voltar.png';
import './Voltar.css';

export default function Voltar(){
    return(
        <>
            <Link class="estilo" to="/"><img src={Back} alt="" /></Link>
        </>
    )
}