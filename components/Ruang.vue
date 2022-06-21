<template>
  <div class="d-flex mb-3">
    <b-img-lazy
      :src="data.display_profile"
      width="90px"
      style="border-radius: 10px"
    />
    <span class="ml-2">
      <h6 class="card-text">{{ data.title }}</h6>
      <p class="card-subtext">{{ data.description }}</p>
    </span>
  </div>
</template>

<script>
export default {
  name: 'RuangComponent',
  props: {
    data: Object,
    index: Number,
  },
}
</script>

<style scoped>
.card-text {
  font-size: 16px;
}

.card-subtext {
  font-size: 14px;
}

.square-img img {
  object-fit: none; /* Do not scale the image */
  object-position: center; /* Center the image within the element */
  width: 100%;
  max-height: 250px;
  margin-bottom: 1rem;
}
</style>
