import React, { useState } from 'react';
import "../css/Calculadora.css";

export default function Calculadora(){
    let [equacao,setEquacao] = useState();
    let [resultado,setResultado] = useState();
    // let [memoria,setEquacao] = useState();

    function LimparTela(){   
        setResultado(0);     
    }

    // function GuardarClick(botao){
    //     if()
    // }

    function ConverterValor(){
        setResultado(resultado * -1);
    }
    
    function Porcentagem(){
        setResultado(resultado / 100);
    }


    return(
        <div className="interface">
            <div className="visor">
                <p>Equação...</p>
                <h1>{resultado}</h1>
            </div>
            <div className="linha1">
                <button onClick={LimparTela}>AC</button>
                <button onClick={ConverterValor}>+/-</button>
                <button onClick={Porcentagem}>%</button>
                <button>/</button>
            </div>
            
            <div className="linha2">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>x</button>
            </div>
            
            <div className="linha3">
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
            </div>

            <div className="linha4">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
            </div>

            <div className="linha5">
                <button>0</button>
                <button>,</button>
                <button>=</button>
            </div>
        </div>
    )
}