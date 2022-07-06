<template>
  <div class="d-flex mb-3 mt-5">
    <b-img-lazy
      :src="data.follow_profile"
      width="70px"
      style="border-radius: 50px"
    />
    <span class="ml-2">
      <h5 class="card-text">{{ data.name }}</h5>
      <p class="card-subtext">{{ data.description }}</p>
    </span>
    <span class="ml-5">
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

.square-img img {
  object-fit: none; /* Do not scale the image */
  object-position: center; /* Center the image within the element */
  width: 100%;
  max-height: 250px;
  margin-bottom: 1rem;
}
.btn {
  border: 5px;
}
</style>
