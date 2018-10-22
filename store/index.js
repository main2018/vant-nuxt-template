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
    if (req.session.token) {
      commit('setToken', req.session.token)
    }
  },
  getStatic1() {
    return new Promise(async (resolve) => {
      const data = await this.$axios.$get(
        "/smoke-device-mgmt/deviceStatic/static1"
      );
      resolve(data);
    })
  },
  getStatic() {
    return new Promise(async (resolve) => {
      const data = await this.$axios.$get(
        "/smoke-device-mgmt/deviceStatic/static"
      );
      resolve(data);
    })
  }
}
