/* eslint-disable eqeqeq */
/* eslint-disable no-console */
export default function ({ store, route, redirect }) {
  if (
    (route.fullPath == '/login' || route.fullPath == '/register') &&
    store.state.token
  ) {
    return redirect('/')
  }
}
