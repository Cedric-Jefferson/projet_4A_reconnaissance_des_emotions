import axios from 'axios/dist/axios'

export const register = newUser => {
  return axios
    .post('http://localhost:5000/users/register', {
      genre: newUser.genre,
      tranche_d_age: newUser.tranche_d_age,
      pays: newUser.pays,
      ville: newUser.ville,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('http://localhost:5000/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log( err.response.request._response)
    })
}
