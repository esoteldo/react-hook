
import { useEffect, useReducer } from 'react'
import {todoReducer} from '../08-useReducer/todoReducer'

const initialState=[
    
]

const init=()=>{
    return JSON.parse(localStorage.getItem('todos'))||[]
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState,init)


    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos)) 
    }, [todos])
    

    const handleNewTodo=(todo)=>{
        const action={
            type:'add todo',
            payload:todo
        }
        dispatch(action)
    }
    const handleRemoveTodo=(id)=>{
        
        const action={
            type:'remove todo',
            payload:id
        }
        dispatch(action)
    }
    const onToggleTodo=(id)=>{
        console.log({id});
        const action={
            type:'toggle todo',
            payload:id
        }
        dispatch(action)
    }

    const todoCount=()=>{
        return todos.length;
    }
    
    const pendingTodos=()=>{
        return todos.filter(todo=>!todo.done).length;
    }

  return {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    onToggleTodo,
    todoCount,
    pendingTodos
  }
}
