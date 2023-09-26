import * as yup from 'yup'

export const validations = {
  name: yup.string().required('Name is required!!!'),
  password: yup.string().required().max(12).min(7)
}
