// ~/plugins/persistedState.client.js

import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'data',
    paths: [
      'token',
      'user',
      'followers',
      'following',
      'all_threads',
      'threads',
    ],
  })(store)
}
