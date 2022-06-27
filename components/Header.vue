<template>
  <span class="title font-weight-bold"> {{ judul }} </span>
</template>

<script>
export default {
  name: 'HeaderComp',
  // eslint-disable-next-line vue/require-prop-types
  props: ['judul'],
}
</script>

<style scoped>
.title {
  font-size: 32px;
}
</style>
