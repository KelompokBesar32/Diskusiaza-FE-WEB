<template>
  <div class="d-flex mb-3 mt-5">
    <b-img-lazy :src="data.follow_profile" class="img-dp" />
    <span class="ml-2">
      <h5 class="card-text">{{ data.name }}</h5>
      <p class="card-subtext">{{ data.description }}</p>
    </span>
    <span class="ml-5 ml-auto">
      <b-button pill variant="primary">Ikuti</b-button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'FollowComponent',
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

.img-dp {
  object-fit: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
