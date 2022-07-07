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
      const res = await this.$axios.post('/api/auth/login', payload)
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
}
