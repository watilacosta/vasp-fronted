import { http } from "./config"

export default {
  login: (email, password) => {
    return http.post('?method=login', {
      email: email,
      password: password
    })
  }
}