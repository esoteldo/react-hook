import React from 'react'

export const TodoAdd = () => {
    
  return (
    <form action="">
                <input 
                type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                 />
                 <button type="submit"
                 className="btn btn-primary">
                    Agregar
                 </button>
        </form>
  )
}
