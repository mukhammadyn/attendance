import { Route, Routes } from 'react-router-dom'
import { Todos } from './Todos'
import { Todo } from './Todo'

export const TodosRoutes = () => {
  return <Routes>
    <Route path="" element={<Todos />} />
    <Route path="/:id" element={<Todo />} />
  </Routes>
}
