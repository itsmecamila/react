import Voltar from "../components/Voltar";
import Calculadora from "../components/Calculadora";
import "../css/Pages.css";

export default function Atividade04(){
    return(
        <main className="calc">
            <Calculadora/>
            <Voltar/>
        </main>
    )
}