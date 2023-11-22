import React from "react";
import {Link} from "react-router-dom";
import "./css/Home.css";

const Home = () => {
    return(
        <div className="items">
            <nav>
                <ul>
                    <li>
                        <Link to="/Atividade01"> 1 - Relógio e Letreiro</Link>
                    </li>
                    <li>
                        <Link to="/Atividade02"> 2 - Contador de Pessoas </Link>
                    </li>
                    <li>
                        <Link to="/Atividade03"> 3 - Componentes </Link>
                    </li>
                    <li>
                        <Link to="/Atividade04"> 4 - Calculadora</Link>
                    </li>
                    <li>
                        <Link to="/Atividade05"> 5 - Jogo da Memória</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
