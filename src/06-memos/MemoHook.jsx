import { useMemo, useState } from 'react';
import {useCounter} from '../hooks';
import { Small } from './Small';

const heavyDuty=(iteration)=>{

  for (let i = 0; i < iteration; i++) {
    console.log(i);
  }

  return 'El valor de la iteracion es:'+iteration;

}

export const MemoHook = () => {

    const {counter,incrementar}=useCounter(4000);

    const [show, setshow] = useState(true);

    const messageMemo=useMemo(()=>heavyDuty(counter), [counter]);


  return (
    <>
    <h1>Counter: <small>{counter}</small></h1>
    <hr />
    <h4>{messageMemo}</h4>

    <button
    className="btn btn-primary"
    onClick={incrementar}>
        +1
    </button>

    <button
    className='btn btn-primary m-2 '
     onClick={()=>setshow(!show)} 
    >
        Show/hide {JSON.stringify(show)}
    </button>
    </>
  )
}
