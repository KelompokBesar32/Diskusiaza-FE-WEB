<template>
  <div>
    <b-nav class="navbar navbar-light bg-light">
      <b-container>
        <Logo />
        <div v-if="$nuxt.$route.path == '/register'">
          <b-button variant="primary" to="/login" pill> Sign In </b-button>
        </div>
        <div v-else>
          <b-button variant="primary" to="/register" pill> Sign Up </b-button>
        </div>
      </b-container>
    </b-nav>
    <Nuxt />
    <footer>
      <p class="text-center text-muted">
        Copyright @diskusiaza 2022 | Privacy Policy
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
}
</script>

<style scoped></style>
