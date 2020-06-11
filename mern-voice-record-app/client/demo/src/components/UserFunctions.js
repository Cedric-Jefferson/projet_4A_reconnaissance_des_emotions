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

export const audiorecorder = newRecord => {
  return axios
    .post('http://localhost:4000/records/audiorecorder', {
      record: newRecord.record,
      version_record: newRecord.version_record,
      ref_micro_record: newRecord.ref_micro_record,
      ref_device_record: newRecord.ref_device_record
    })
    .then(response => {
      console.log('Record registered')
      /*localStorage.setItem('recordtoken', response.data)
      return response.data*/
    })
}

export const audiocheck = recorder => {
  return axios
    .post('http://localhost:4000/recorders/audiocheck', {
      record: recorder.record
    })
    .then(response => {
      localStorage.setItem('recordtoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log( err.response.request._response)
    })
}
