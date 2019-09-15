import axios from 'axios'

export const signup = newUser => {
    debugger
    return axios.post('signup', {
        name: newUser.name,
        password: newUser.password,
        place: newUser.place,
        DOB: newUser.DOB
      })
      .then(res => {
        console.log('res')
      })
  } 