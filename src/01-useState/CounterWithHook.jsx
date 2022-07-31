import { useCounter } from "../hooks/useCounter"


export const CounterWithHook = () => {

    const valorInicial=15;
    const {counter,reset,decrementar,incrementar}=useCounter(valorInicial);
  return (
    <>
    <h3>CounterWithHook: {counter}</h3>
    <hr/>
    <button onClick={reset} className="btn btn-primary m-2 ">Reset</button>
    <button onClick={decrementar} className="btn btn-primary m-2 ">-1</button>
    <button onClick={incrementar} className="btn btn-primary m-2 ">+1</button>
    </>
  )
}
