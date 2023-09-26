import axios from 'axios'

const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

const errorHandle = (err) => {
  console.log(err)
  throw new Error(err.message)
}

request.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  return config
})

request.interceptors.response.use(res => {
  return res.data
}, errorHandle)

export default request
