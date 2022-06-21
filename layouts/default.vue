<template>
  <div class="m-3">
    <b-row class="mt-3">
      <b-col class="col-md-3">
        <Sidebar />
      </b-col>
      <b-col>
        <Nuxt />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'DefaultView',
}
</script>

<style>
body {
  font-family: 'Inter', 'Poppins', sans-serif;
}
</style>
