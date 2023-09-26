import { Link } from 'react-router-dom'
import { useTodosProps } from './useTodosProps'

export const Todos = () => {
  const { todos, register, onSubmit, handleSubmit, errors } = useTodosProps()

  return <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder='name' />
      {
        errors.name && <span>{errors.name.message}</span>
      }
      <button type='submit'>submit</button>
    </form>
    <ul>
      {
        todos.data?.map(todo => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          </li>
        ))
      }
    </ul>
  </>
}
