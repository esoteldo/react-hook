import { useTodo } from "../hooks/useTodo"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"




export const TodoApp = () => {

    const {todos,handleNewTodo,handleRemoveTodo,onToggleTodo,todoCount,pendingTodos }=useTodo();

    

  return (
    <>
    <h1>TodoApp: {todoCount()} <small>pendientes: {pendingTodos()}</small></h1>
    <hr />

    <div className="row">
        <div className="col-7">
            
                <TodoList todo={todos} onDeleteTodo={handleRemoveTodo} onToggleTodo={onToggleTodo}/>
                

        </div>
        <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd onNewTodo={handleNewTodo}/>
            
        </div>
    </div>
    </>
  )
}
