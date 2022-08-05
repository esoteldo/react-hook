import { TodoItem } from "./TodoItem"

export const TodoList = ({todo,onDeleteTodo}) => {
  return (
    <ul className="list-group">
    {
        todo.map(todo=>(
            <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo}/>
        )) 
    }
        </ul>
  )
}
