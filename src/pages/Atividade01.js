import Voltar from "../components/Voltar";
import Relogio from "../components/Relogio";
import Letreiro from "../components/Letreiro";
import "../css/Pages.css"

export default function Atividade01(){
    return(
        <>
        <main className="atv1">
            <Relogio/>
            <Letreiro frase="Conheça a Fatec..."/>
            <Voltar/>
        </main>
        </>
    )
}