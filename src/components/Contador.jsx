import React, { useState } from 'react';
import SimboloHomem from '../img/homem.png';
import SimboloMulher from '../img/mulher.png';
import MaisBotão from '../img/mais.png';
import MenosBotão from '../img/menos.png';
import Recarregar from '../img/reload.png';
import "../css/Contador.css";

export default function Contador() {
    const [ countH, setCountH ] = useState(0);
    const [ countM, setCountM ] = useState(0);    

    return (
        <div>
            <div class="completo">
            <p>{countH + countM}</p>
            <img class="recarregar-button" src={Recarregar} onClick={() => {setCountH(0);setCountM(0)}} />
            <div class="layout">
                <div class="layoutcenter">
                    <div>
                        <img src={SimboloHomem} alt="Símbolo Gênero Masculino" />
                    </div>
                    <p>{countH}</p>
                    <div class="botoes">
                        <img src={MaisBotão} alt="" onClick={() => setCountH(countH + 1)}/> 
                        <img src={MenosBotão} alt="" onClick={()  => {
                            if(countH > 0){
                                setCountH(countH - 1)
                            }
                        }
                        } /> 
                    </div>
                  </div>
                <div class="layoutcenter"> 
                    <div>
                        <img src={SimboloMulher} alt="" />
                    </div>      
                        <p>{countM}</p>   
                    <div class="botoes">
                        <img src={MaisBotão} alt="" onClick={() => setCountM(countM + 1)}/> 
                        <img src={MenosBotão} alt="" onClick={() => {
                            if(countM > 0){
                                setCountM(countM - 1)
                            }
                        }
                        }/> 
                    </div>
                </div>
            </div>
                {/* <button onClick={() => setCountH(countH + 1)}> <img src={MaisBotão}></img> </button>
                <button onClick={() => setCountH(countH - 1)}> <img src={MenosBotão} alt="" /></button>
                <p>Total homens {countH}</p>
                <button onClick={() => setCountM(countM + 1)}> <img src={MaisBotão} alt="" /> </button>
                <button onClick={() => setCountM(countM - 1)}> <img src={MenosBotão} alt="" /> </button>
                <p>Total mulheres {countM}</p> */}
            </div>
            <br/>
        </div>
    );
}
