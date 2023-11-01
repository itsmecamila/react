import React, { useState, useEffect } from 'react';

export default function Contador() {
    const [ countH, setCountH ] = useState(0);
    const [ countM, setCountM ] = useState(0);
    const state = useState(0);

    // const count = state[0];

    // function handleClickH(){
    //     // setCount(count + 1);
    //     i++;
    // }

    return (
        <div>
            <h1>Botões</h1>
            <button onClick={() => setCountH(countH + 1)}> + homens </button>
            <button onClick={() => setCountH(countH - 1)}> - homens</button>
            <p>Total homens {countH}</p>
            <button onClick={() => setCountM(countM + 1)}>+ mulheres</button>
            <button onClick={() => setCountM(countM - 1)}>- mulheres</button>
            <p>Total mulheres {countM}</p>
            <br/>
            <p>Total de pessoas {countH + countM}</p>
        </div>
    );
}
