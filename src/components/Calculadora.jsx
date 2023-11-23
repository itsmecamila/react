import React, { useState } from 'react';
import * as math from 'mathjs';
import "../css/Calculadora.css";

export default function Calculadora(){
    
    const [expressao, setExpressao] = useState('');
    const [resultado, setResultado] = useState('');

    function limparTela() {
      setExpressao('');
      setResultado(0);
    }

    function guardarClick(botao) {
      if (expressao.endsWith('=')) {
        // Se a expressão terminar com '=', começar uma nova expressão
        setExpressao(resultado + botao);
      } else if (expressao.includes('=')) {
        // Se a expressão contiver '=', substituir por uma nova expressão
        setExpressao(botao);
      } else {
        // Senão, continuar adicionando ao final da expressão
        setExpressao((prevExpressao) => prevExpressao + botao);
      }
    }
  
    function converterValor() {
      if(resultado == ''){
        setExpressao(String(expressao * -1));
        return setResultado(expressao * -1);
      }
      
      return setResultado(resultado * -1);
    }
  
    function adicionarParentese(abreParentese) {
      setExpressao((prevExpressao) => prevExpressao + abreParentese);
    }
  
    function calcularResultado() {
      try {
        const resultadoCalculado = math.evaluate(expressao);
        setResultado(resultadoCalculado);
        setExpressao((prevExpressao) => prevExpressao + '=');
      } catch (error) {
        setResultado('Error');
        setExpressao('');
      }
    }

    return (
      <div className="interface">
      <div className="visor">
              {expressao.endsWith('=') ? (
                <>
                  {expressao !== '' && <p>{expressao}</p>}
                  <h1>{resultado !== '' ? resultado : '0'}</h1>
                </>
              ) : (
                <>
                
                  <h1>{expressao !== '' ? expressao : '0'}</h1>
                  {resultado !== '' && <p>{resultado}</p>}
                </>
              )}
            </div>

      <div className="linha">
          <button onClick={() => adicionarParentese('(')}>(</button>
          <button onClick={() => adicionarParentese(')')}>)</button>
      </div>
        <div className="linha1">
          <button onClick={() => limparTela()}>AC</button>
          <button onClick={() => converterValor()}>+/-</button>
          <button onClick={() => guardarClick('%')}>%</button>
          <button onClick={() => guardarClick('/')}>/</button>
        </div>
  
        <div className="linha2">
          <button onClick={() => guardarClick('7')}>7</button>
          <button onClick={() => guardarClick('8')}>8</button>
          <button onClick={() => guardarClick('9')}>9</button>
          <button onClick={() => guardarClick('*')}>x</button>
        </div>
  
        <div className="linha3">
          <button onClick={() => guardarClick('4')}>4</button>
          <button onClick={() => guardarClick('5')}>5</button>
          <button onClick={() => guardarClick('6')}>6</button>
          <button onClick={() => guardarClick('-')}>-</button>
        </div>
  
        <div className="linha4">
          <button onClick={() => guardarClick('1')}>1</button>
          <button onClick={() => guardarClick('2')}>2</button>
          <button onClick={() => guardarClick('3')}>3</button>
          <button onClick={() => guardarClick('+')}>+</button>
        </div>
  
        <div className="linha5">
          <button onClick={() => guardarClick('0')}>0</button>
          <button onClick={() => guardarClick('.')}>,</button>
          <button onClick={() => calcularResultado()}>=</button>
        </div>
      </div>
    );
  };
