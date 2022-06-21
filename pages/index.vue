<template>
  <div class="d-flex align-items-center">
    <b-col>
      <span class="title font-weight-bold"> Home </span>
    </b-col>
    <b-col>
      <b-form-input
        id="input-2"
        placeholder="Enter name"
        required
      ></b-form-input>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style scoped>
.title {
  font-size: 32px;
}
</style>
