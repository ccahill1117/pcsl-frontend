import { createStore } from 'vuex'
import createPersistedState from 'vuex-plugin-persistedstate'
// import user from './modules/user'

export default createStore({
  state: {
    user: null,
    token: null,
    userId: null
  },
  getters: {},
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setToken (state, token) {
      state.token = token
    },
    setUserId (state, userId) {
      state.userId = userId
    }
  },
  actions: {},
  modules: {
    // user
  },
  plugins: [createPersistedState()]
})

// export default ({ store }) => {
//   new VuexPersistence({

//     state: {
//       user: null,
//       token: null
//     },
//     getters: {
//       isLoggedIn (state) {
//         return !!state.token
//       }
//     },
//     mutations: {
//       setUser (state, user) {
//         state.user = user
//       },
//       setToken (state, token) {
//         state.token = token
//       }
//     },
//     actions: {
//     },
//     modules: {
//     }

//   }).plugin(store)
// }
