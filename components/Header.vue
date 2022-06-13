<template>
  <b-container fluid>
    <b-row class="pt-3 mx-5 d-flex align-items-center">
      <b-col class="col-md-3">
        <Logo />
      </b-col>
      <b-col>
        <span class="title"> Home </span>
      </b-col>
      <b-col>
        <b-form-input
          id="input-2"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'HeaderCom',
}
</script>

<style scoped>
.title {
  font-size: 32px;
}
</style>
