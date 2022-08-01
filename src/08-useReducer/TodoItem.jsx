

export const TodoItem = ({todoDescription,todoDone}) => {
  return (
        <li className="list-group-item d-flex justify-content-between">
          <span className="align-self-center">{todoDescription}</span>
          <button className="btn btn-danger">Borrar</button>
          </li>
  )
}
