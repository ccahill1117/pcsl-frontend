const state = {
  user: null,
  token: null
}

const mutations = {
  logoutUser (state) {
    state.user = null
    state.token = null
  },
  loginUser (state, user, token) {
    state.user = user
    state.token = token
  }
}

export default {
  state,
  mutations
}
