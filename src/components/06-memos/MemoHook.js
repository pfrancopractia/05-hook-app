import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {

    const { counter, increment } =  useCounter(5000);
    const [show, setShow] = useState(true);
    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr/>
            <p> { memoProcesoPesado } </p>
            <button 
                onClick={increment}
                className='btn btn-primary'>
                +1
            </button>

            <button
                className='btn btn-outline-primary ml-3'
                onClick={ ()=> {
                    setShow(!show);
                }}
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
