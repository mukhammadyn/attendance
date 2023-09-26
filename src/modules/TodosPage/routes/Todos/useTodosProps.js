import { useForm } from 'react-hook-form'
import { useGetTodos } from '../../services/todos.services'
import { yupResolver } from '@hookform/resolvers/yup'
import { object } from 'yup'
import { validations } from '../../../../services/yupConfig/yupValidations'

export const useTodosProps = () => {
  const todos = useGetTodos()

  const resolver = yupResolver(object({
    name: validations.name
  }))

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm({
    resolver
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  console.log(errors)

  return {
    todos,
    register,
    onSubmit,
    handleSubmit,
    errors
  }
}
