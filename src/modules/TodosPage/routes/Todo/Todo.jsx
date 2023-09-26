import { useParams } from 'react-router-dom'
import { useTodoProps } from './useTodoProps'

export const Todo = () => {
  const { todo, handleBackClick } = useTodoProps()

  return <div>
    <button onClick={handleBackClick}>Back</button>
    <h1>{todo.data?.title} {todo.data?.id}</h1>
  </div>
}
