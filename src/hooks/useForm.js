import { useEffect, useState } from "react";


export const useForm = (initialForm={}) => {

    const [formState, setformstate,] = useState(initialForm);
     
    const {reset}=formState;
    
        const oninputchanged=({target})=>{
            const {name,value}=target;
            setformstate({
              ...formState,
              [name]:value
            });
        }
        const onResetForm=()=>{
          setformstate(initialForm);
        }
  return {
    ...formState,
    formState,
    oninputchanged,
    onResetForm,
    
  }
}
