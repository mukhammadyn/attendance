import { useQuery } from 'react-query'
import request from '../../../services/httpRequest'

const todosServices = {
  getTodos: () => request.get('/todos').then(data => data),
  getTodo: (id) => request.get(`/todos/${id}`).then(data => data)
}

export const useGetTodos = (props = {}) => {
  return useQuery(['todos'], todosServices.getTodos, props)
}

export const useGetTodo = (params, props) => {
  return useQuery(['todo'], () => todosServices.getTodo(params.id), props)
}
