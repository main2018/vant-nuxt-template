export const state = () => ({
  user: null,
  token: ''
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setToken(state, token) {
    state.token = token
  }
}

export const getters = {
  getUser(state) {
    return state.user
  },
  getToken(state) {
    return state.token
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({
    commit
  }, {
    req
  }) {
    if (req.query.token) {
      commit('setToken', req.query.token)
    }
  }
}
