import React from 'react'
import {useForm} from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {
  
  const {description,oninputchanged,onResetForm}=useForm({
    description:''
  })

  const onFormSubmit=(event)=>{
    event.preventDefault();
    console.log();
    if(description.lenght <=1)return;

    const newTodo={
      id:new Date().getTime(),
      description:description,
      done:false
    }
    //TODO: el formulario no se limpia despues de agregar un todo
    onResetForm();
    onNewTodo(newTodo);
    
  }

  
  return (
    <form onSubmit={onFormSubmit}>
                <input 
                type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                name="description"
                defaultValue={description}
                onChange={oninputchanged}
                 />
                 <button type="submit"
                 className="btn btn-primary">
                    Agregar
                 </button>
        </form>
  )
}
