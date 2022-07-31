import { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

    const [counter,setCounter]=useState(10);

    const incrementFather=useCallback(
        (valor)=>{
        setCounter((value)=>value+valor);
    },[])

    /*  useEffect(() => {
      incrementFather(5);
    }, [incrementFather])
      
 */
    
  return (
    <>
    <h1>useCallBack Hook: {counter}</h1>
    <ShowIncrement increment={incrementFather} />
    </>
  )
}
