import { useState } from 'react';
import {useCounter} from '../hooks';
import { Small } from './Small';

export const Memorize = () => {

    const {counter,incrementar}=useCounter();

    const [show, setshow] = useState(true);


  return (
    <>
    <h1>Counter: <Small value={counter} /></h1>
    <hr />
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
