export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.token) {
    // alert('Anda perlu login untuk mengakses halaman ini!')
    return redirect('/login')
  }
}
