export const state = () => ({
  token: '',
  user: '',
  followers: '',
  following: '',
  threads: '',
  all_threads: '',
  all_ruang: '',
})

export const mutations = {
  SET_USER(state, token) {
    state.token = token
  },

  GET_USER(state, data) {
    state.user = data
  },

  GET_FOLLOWERS(state, data) {
    state.followers = data
  },

  GET_FOLLOWING(state, data) {
    state.following = data
  },

  GET_THREADS_BY_USER_ID(state, data) {
    state.threads = data
  },

  GET_ALL_THREADS(state, data) {
    state.all_threads = data
  },

  GET_ALL_RUANG(state, data) {
    state.all_ruang = data
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
      alert('LOGOUT', e.message)
    }
  },

  async GET_FOLLOWERS({ commit, state }) {
    try {
      await this.$axios.get('/t/user/followers', {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      commit('GET_FOLLOWERS', '')
    } catch (e) {
      alert('GET_FOLLOWERS', e.message)
    }
  },

  async GET_FOLLOWING({ commit, state }) {
    try {
      await this.$axios.get('/t/user/followed', {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      commit('GET_FOLLOWING', '')
    } catch (e) {
      alert('GET_FOLLOWING', e.message)
    }
  },

  async GET_THREADS_BY_USER_ID({ commit, state }) {
    try {
      const res = await this.$axios.get(`/t/therad/user/${state.user.id}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      commit('GET_THREADS_BY_USER_ID', res.data.data)
    } catch (e) {
      alert('GET_THREADS_BY_USER_ID', e.message)
    }
  },

  async GET_ALL_THREADS({ commit, state }) {
    try {
      const res = await this.$axios.get('/t/therad', {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      commit('GET_ALL_THREADS', res.data.data)
    } catch (e) {
      alert('GET_ALL_THREADS', e.message)
    }
  },

  async GET_ALL_RUANG({ commit, state }) {
    try {
      const res = await this.$axios.get('/t/ruang', {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      commit('GET_ALL_RUANG', res.data.data)
    } catch (e) {
      alert('GET_ALL_RUANG', e.message)
    }
  },

  async CREATE_THREAD_NOT_IN_RUANG({ commit }, payload) {
    try {
      await this.$axios.post(
        '/t/user/therad',
        { data: payload },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      )
      this.$swal.fire({
        icon: 'success',
        title: 'Thread berhasil dibuat',
      })
      this.$router.go({ path: '/' })
    } catch (e) {
      alert('Create Thread Error', e.message)
    }
  },
}
