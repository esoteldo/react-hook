import { useState } from "react"


export const useCounter = (initialValue=10) => {

        const [counter,setCounter]=useState(initialValue);

        const incrementar=()=>{
            console.log(typeof(counter));
            setCounter(counter+1);
            
        }
        const decrementar=()=>{
            setCounter(counter-1);
            
        }
        const reset=()=>{
            
            setCounter(initialValue);
        }
    

  return{
    counter,
    reset,
    decrementar,
    incrementar
  }
}