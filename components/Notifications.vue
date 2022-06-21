<template>
  <div class="d-flex my-3">
    <b-img-lazy :src="data.display_profile" width="70px" />
    <div class="ml-3">
      <p class="text-secondary font-ruang">
        {{ data.title }} - Dikirimkan oleh {{ data.by }} - {{ data.date }}
        <span class="font-status font-weight-bold d-block">
          {{ data.status }}
        </span>
      </p>
    </div>
    <b-button variant="white" class="ml-auto mb-3" size="sm">
      <span class="material-icons"> more_horiz </span>
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'NotificationComp',
  props: {
    data: Object,
    index: Number,
  },
}
</script>

<style scoped>
.font-ruang {
  font-size: 12px;
}

.font-status {
  font-size: 14px;
}
</style>
