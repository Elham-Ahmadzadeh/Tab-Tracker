import Api from './ApiPage'

export default{
  register (credentials) {
    return Api().post('register', credentials)
  }
}
