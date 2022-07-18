<template>
  <div>
    <p class="normal font-weight-bold">{{ thread.judul }}</p>
    <p>{{ thread.isi }}</p>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'ThreadView',
  props: {
    thread: Object,
    index: Number,
  },
}
</script>

<style></style>
