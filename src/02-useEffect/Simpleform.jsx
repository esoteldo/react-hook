import { useEffect, useState } from "react";
import { Message } from "./Message";


export const Simpleform = () => {

const [formstate, setformstate] = useState({
    username:'enrique',
    email:'soteldo18@hotmail.com'
});

    const {username,email}=formstate;
    

    const oninputchanged=({target})=>{
        const {name,value}=target;
        setformstate({
          ...formstate,
          [name]:value
        });
    }

    useEffect(() => {
      /* Se ejecuta una sola vez al llamar el componente la primera ez */
      /* console.log('useeffect called'); */
    }, []);
    useEffect(() => {
      /* Se ejecuta al modificarse el formstae*/
      /* console.log('formState changed'); */
    }, [formstate]);
    useEffect(() => {
      /* Se ejecuta al modificar el email*/
     /*  console.log('email changed'); */
    }, [email]);
    
    

  return (
    <>
    <div>simpleform</div>
    <hr />
    <input type="text" className='form-control ' placeholder='Username' name='username' value={username} onChange={oninputchanged}/>
    {
    (username==='strider2') && <Message/>
    }
    <input type="text" className='form-control mt-4' placeholder='email@domain.com' name='email' value={email} onChange={oninputchanged}/>
    
    </>
  )
}
