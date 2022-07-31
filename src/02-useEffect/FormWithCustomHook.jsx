import { useEffect} from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";


export const FormWithCustomHook = () => {

  const {formState,oninputchanged,onResetForm,username,email,password}=useForm({
    username:'enrique',
    email:'soteldo18@hotmail.com',
    password:'',
});

  

    useEffect(() => {
      /* Se ejecuta una sola vez al llamar el componente la primera ez */
      /* console.log('useeffect called'); */
    }, []);
    useEffect(() => {
      /* Se ejecuta al modificarse el formstae*/
      /* console.log('formState changed'); */
    }, [formState]);
    useEffect(() => {
      /* Se ejecuta al modificar el email*/
     /*  console.log('email changed'); */
    }, [email]);
    
    

  return (
    <>
    <h3>Formulario con cutom Hook</h3>
    <hr />
    <input type="text" className='form-control ' placeholder='Username' name='username' value={username} onChange={oninputchanged}/>
    {
    (username==='strider2') && <Message/>
    }
    <input type="text" className='form-control mt-2' placeholder='email@domain.com' name='email' value={email} onChange={oninputchanged}/>
    <input type="password" className='form-control mt-2' placeholder='Contraseña' name='password' value={password} onChange={oninputchanged}/>
    
    <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
    </>
  )
}
