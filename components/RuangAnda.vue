<template>
  <div class="d-flex mb-3">
    <b-img-lazy :src="data.display_profile" width="50px" class="img-dp" />
    <p class="ml-3 font-weight-bold my-auto">{{ data.title }}</p>
    <b-button
      class="ml-auto my-auto d-flex align-items-center"
      size="sm"
      variant="outline-info"
    >
      <span class="material-icons">{{ data.logo }}</span>
      {{ data.jabatan }}
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'BigButtonComp',
  props: {
    data: Object,
    index: Number,
  },
}
</script>

<style></style>
