export const state = () => ({
  token: '',
})

export const mutations = {
  SET_USER(state, token) {
    state.token = token
  },
}

export const actions = {
  async SIGN_UP({ commit }, payload) {
    try {
      await this.$axios.post('/api/auth/register', payload)
      this.$router.push({ path: 'login' })
    } catch (e) {
      alert('Sign Up Error', e.message)
    }
  },
  async SIGN_IN({ commit }, payload) {
    try {
      const res = await this.$axios.post('/api/auth/login', payload)
      commit('SET_USER', res.data.token)
      this.$router.push({ path: '/' })
    } catch (e) {
      alert('Sign In Error', e.message)
    }
  },
}
