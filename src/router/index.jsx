import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../Layouts/MainLayout'
import { Home } from '../modules/Home'
import { TodosRoutes } from '../modules/TodosPage/routes'

const Router = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/todos/*' element={<TodosRoutes />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default Router
