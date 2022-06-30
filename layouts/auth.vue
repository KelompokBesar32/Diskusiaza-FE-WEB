<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/logo.png"
          width="150"
          height="50"
          alt=""
          style="margin-left: 30%"
        />
      </a>
      <button type="button" class="btn btn-primary" style="margin-right: 10%">
        Sign Up
      </button>
    </nav>
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

<style></style>
