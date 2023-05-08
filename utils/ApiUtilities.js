// const baseUrl = () => {
//   return 'baseUrl'
// }

// import axios from 'axios'

export const ApiLoggedIn = {
  baseUrl: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true
  },
  utils: 'utils'
}

export const ApiLoggedOut = {
  baseUrl: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: false
  },
  utils: 'utils'
}
