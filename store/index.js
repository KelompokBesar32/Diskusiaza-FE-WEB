export const state = () => ({
  token: '',
  user: '',
})

export const mutations = {
  SET_USER(state, token) {
    state.token = token
  },

  GET_USER(state, data) {
    state.user = data
  },
}

export const actions = {
  async SIGN_UP({ commit }, payload) {
    try {
      await this.$axios.post('/auth/register', payload)
      this.$swal.fire({
        icon: 'success',
        title: 'Pendaftaran Berhasil',
        text: 'Silahkan Login!',
      })
      this.$router.push({ path: 'login' })
    } catch (e) {
      alert('Sign Up Error', e.message)
    }
  },

  async SIGN_IN({ commit }, payload) {
    try {
      const res = await this.$axios.post('/auth/login', payload)
      commit('SET_USER', res.data.token)
      this.$router.push({ path: '/' })
    } catch (e) {
      // eslint-disable-next-line eqeqeq
      if (e.response.status == 401) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email atau password anda salah!',
        })
      } else {
        this.$swal.fire({
          icon: 'error',
          title: 'Server Error',
          showConfirmButton: false,
          timer: 1500,
        })
      }
    }
  },

  async GET_PROFILE({ commit, state }) {
    try {
      const res = await this.$axios.get('/t/user/profile', {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      commit('GET_USER', res.data.data)
    } catch (e) {
      alert('GET PROFILE', e.message)
    }
  },

  async LOGOUT({ commit, state }) {
    try {
      await this.$axios.get('/t/auth/logout', {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      commit('SET_USER', '')
      this.$router.go({ path: '/' })
    } catch (e) {
      alert('GET PROFILE', e.message)
    }
  },
}
