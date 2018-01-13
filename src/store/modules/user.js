const state = {
  user: {}
}

const getters = {
  user: state => {
      return state.user
  },
  fullName: state => {
    return state.user.firstName + ' ' + state.user.lastName
  }
}

const actions = {
  setUser: function ({commit}, user) {
    commit('ADD_USER', {
      user: user
    })
  }
}

const mutations = {
  ADD_USER (state, {user}) {
      state.user = user
  }
}

const userStore = {
  getters,
  actions,
  mutations,
  state
}

export default userStore
