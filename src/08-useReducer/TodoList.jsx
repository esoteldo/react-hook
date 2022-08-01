import { TodoItem } from "./TodoItem"

export const TodoList = ({todo}) => {
  return (
    <ul className="list-group">
    {
        todo.map(todo=>(
            <TodoItem key={todo.id} todoDescription={todo.description} todoDone={todo.done} />
        )) 
    }
        </ul>
  )
}
