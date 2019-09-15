import axios from 'axios'

const api = axios.create({
baseURL: 'http://localhost:9000',
})

export const signup = user => api.post('/signup', user)
export const signin = user => api.post('/signin', user)
export const getDetail = id =>api.get(`/signup/${id}`)
export const updt = (user,id) =>api.put(`/update/${id}`,user)


const apis = {
    signup,
    signin,
    getDetail,
    updt
}

export default apis