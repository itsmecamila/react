import Voltar from "../components/Voltar";
import Relogio from "../components/Relogio";
import Letreiro from "../components/Letreiro";

export default function Atividade01(){
    return(
        <>
            <h1> Atividade 1 </h1>
            <Relogio/>
            <Letreiro frase="Conheça a Fatec..."/>
            <Voltar/>
        </>
    )
}