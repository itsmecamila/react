import React, { useState } from 'react';
import * as math from 'mathjs';
import "../css/Calculadora.css";

export default function Calculadora(){
    
    const [expressao, setExpressao] = useState('');
    const [resultado, setResultado] = useState('');
    const [historico, setHistorico] = useState([]);

    function limparTela() {
      setExpressao('');
      setResultado(0);
    }

    // se resultado == 0, digita no resultado a expressao
    // se expressao != 0, expressao recebe valor do resultado 
    // e resultado recebe nova expressao; 
  
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
  
    // function converterValor() {
    //   setResultado((prevResultado) => prevResultado * -1);
    // }

    function converterValor() {
      if(expressao != ''){
        return setResultado(resultado * -1);
      }
      // try {
      //   if (expressao.endsWith('=')) {
      //     // Se a expressão terminou com '=', converter o sinal do resultado
      //     setResultado((prevResultado) => prevResultado * -1);
      //     setExpressao((prevExpressao) => prevExpressao.replace(/[-+]?\d*\.?\d*$/, (match) => (parseFloat(match) * -1).toString()));
      //   } else {
      //     // Se a expressão não terminou com '=', converter o sinal do último número
      //     setExpressao((prevExpressao) => prevExpressao.replace(/[-+]?\d*\.?\d*$/, (match) => (parseFloat(match) * -1).toString()));
      //   }
      // } catch (error) {
      //   setResultado('Error');
      //   setExpressao('');
      // }
    }
  
    function porcentagem() {
      try {
        const resultadoCalculado = math.evaluate(expressao + '/100');
        setResultado(resultadoCalculado);
        setExpressao(resultadoCalculado.toString() + '%');
      } catch (error) {
        setResultado('Error');
        setExpressao('');
      }
    }
  
    function adicionarParentese(abreParentese) {
      setExpressao((prevExpressao) => prevExpressao + abreParentese);
    }
  
    function fecharParentese() {
      setExpressao((prevExpressao) => prevExpressao + ')');
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

    function historicoDeCalculos(){
        setHistorico([...historico,expressao]);
    }

    // if(resultado == 0 && expressao == ' '){
    //     expressao;
    // }
  
    return (
      <div className="interface">
        {/* <div className="visor">
          <p>{resultado != '' && expressao != '' ? expressao: ''}</p>
          
          <h1>{resultado != '' ? resultado: expressao}</h1>

        </div> */}
        {/* <div className="visor">
        {expressao.endsWith('=') ? (
          <>
            <p>{resultado != '' && expressao != '' ? expressao: ''}</p>
            <h1>{resultado != '' ? resultado: expressao}</h1>
          </>
        ) : (
          <>
            <h1>{resultado != '' && expressao != '' ? expressao: ''}</h1>
            <p>{resultado != '' ? resultado: expressao}</p>
          </>
        )} */}

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
          <button onClick={() => porcentagem()}>%</button>
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
          <button onClick={() => {calcularResultado(); historicoDeCalculos()}}>=</button>
        </div>
      </div>
    );
  };



//   const [input, setInput] = useState('');
//   const [expression, setExpression] = useState('');

//   const handleClick = (value) => {
//     setInput((prevInput) => prevInput + value);
//   };

//   const calculateResult = () => {
//     try {
//       const result = eval(input);
//       setExpression(input + '=');
//       setInput(result.toString());
//     } catch (error) {
//       setExpression('Error');
//       setInput('');
//     }
//   };

//   const handleClear = () => {
//     setExpression('');
//     setInput('');
//   };

//   return (
//     <div>
//       <div>
//         {/* Exibe a expressão numérica acima do visor */}
//         {expression && <div>{expression}</div>}
//         <input type="text" value={input} readOnly />
//       </div>
//       <div>
//         {[1, 2, 3, '+'].map((value) => (
//           <button key={value} onClick={() => handleClick(value)}>
//             {value}
//           </button>
//         ))}
//       </div>
//       <div>
//         {[4, 5, 6, '-'].map((value) => (
//           <button key={value} onClick={() => handleClick(value)}>
//             {value}
//           </button>
//         ))}
//       </div>
//       <div>
//         {[7, 8, 9, '*'].map((value) => (
//           <button key={value} onClick={() => handleClick(value)}>
//             {value}
//           </button>
//         ))}
//       </div>
//       <div>
//         {[0, '/', '=', 'C'].map((value) => (
//           <button key={value} onClick={value === '=' ? calculateResult : () => handleClick(value)}>
//             {value}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

    // let [equacao,setEquacao] = useState();
    // let [resultado,setResultado] = useState();
    // // let [memoria,setEquacao] = useState();

    // function LimparTela(){   
    //     setResultado(0);     
    // }

    // function GuardarClick(botao){
        
    // }

    // function ConverterValor(){
    //     setResultado(resultado * -1);
    // }
    
    // function Porcentagem(){
    //     setResultado(resultado / 100);
    // }


    // return(
    //     <div className="interface">
    //         <div className="visor">
    //             <p>Equação...</p>
    //             <h1>{resultado}</h1>
    //         </div>
    //         <div className="linha1">
    //             <button onClick={LimparTela}>AC</button>
    //             <button onClick={ConverterValor}>+/-</button>
    //             <button onClick={Porcentagem}>%</button>
    //             <button>/</button>
    //         </div>
            
    //         <div className="linha2">
    //             <button onClick={GuardarNumero}>7</button>
    //             <button onClick={GuardarNumero}>8</button>
    //             <button onClick={GuardarNumero}>9</button>
    //             <button onClick={GuardarNumero}>x</button>
    //         </div>
            
    //         <div className="linha3">
    //             <button onClick={GuardarNumero}>4</button>
    //             <button onClick={GuardarNumero}>5</button>
    //             <button onClick={GuardarNumero}>6</button>
    //             <button>-</button>
    //         </div>

    //         <div className="linha4">
    //             <button onClick={GuardarNumero}>1</button>
    //             <button onClick={GuardarNumero}>2</button>
    //             <button onClick={GuardarNumero}>3</button>
    //             <button onClick={GuardarNumero}>+</button>
    //         </div>

    //         <div className="linha5">
    //             <button onClick={GuardarNumero}>0</button>
    //             <button>,</button>
    //             <button>=</button>
    //         </div>
    //     </div>
    // )
