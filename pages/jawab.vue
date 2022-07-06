<template>
  <div class="d-flex">
    <b-col id="mid" class="col-md-7">
      <Header :judul="judul" />
      
    </b-col>
    <b-col id="right" class="mt-2 text-start">
      <RightSide/>
    </b-col>
  </div>
</template>

<script>
export default {
    name:'JawabPage'
}
</script>

<style>

</style>