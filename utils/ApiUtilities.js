// const baseUrl = () => {
//   return 'baseUrl'
// }

// import axios from 'axios'

export const ApiUtilities = {
  baseUrl: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true
  },
  utils: 'utils'
}
