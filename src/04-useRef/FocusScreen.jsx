import { useRef } from "react"


export const FocusScreen = () => {

    const inputref=useRef();

    const onClick=()=>{
        
        inputref.current.select();
    }

  return (
    <>
    <h1>FocusScreen</h1>
    <hr />
    <input 
    ref={inputref}
    type="text"
    placeholder="Ingrese su nombre" 
    className="form-control"
    />
    <button className="btn btn-primary mt-2" onClick={onClick}>
    Set Focus
    </button>
    </>
  )
}
