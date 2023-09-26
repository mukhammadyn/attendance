import { useNavigate, useParams } from 'react-router-dom'
import { useGetTodo } from '../../services/todos.services'

export const useTodoProps = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const handleBackClick = () => navigate(-1)

  const todo = useGetTodo(
    {
      id
    },
    {
      onSuccess (data) {
        console.log(data)
      }
    }
  )
  return {
    todo,
    handleBackClick
  }
}
