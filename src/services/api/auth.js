import http from './http'

const login = data => {
  return http({
    url: '/auth/signIn',
    method: 'post',
    data
  })
}

const signUp = data => {
  return http({
    url: '/auth/signUp',
    method: 'POST',
    body: JSON.stringify(data),
    headers: {  
      'Accept': 'application/json',  
      'Content-Type': 'application/json; charset=UTF-8'  
  }
  })
}

export {
  login,
  signUp
}