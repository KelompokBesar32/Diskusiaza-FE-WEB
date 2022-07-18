<template>
  <div>
    <div class="d-flex my-3">
      <b-img-lazy
        src="https://picsum.photos/id/999/200/200"
        rounded="circle"
        height="40px"
      />
      <span class="d-flex flex-column ml-3">
        <span class="normal">{{ thread.user_id }}- Ikuti</span>
        <p id="da-secondary-text" class="text-secondary">Tes</p>
        <p class="normal font-weight-bold">
          {{ thread.judul }}
        </p>
        <p>
          {{ thread.isi }}
        </p>
        <div id="action" class="d-flex align-items-center">
          <b-button-group size="sm">
            <b-button
              v-if="thread.is_like == false"
              class="d-flex align-items-center"
              variant="primary"
              pill
            >
              <font-awesome-icon
                :icon="['fas', 'thumbs-up']"
                style="font-size: 18px"
                class="mr-2"
              />
              {{ thread.total_like }}
            </b-button>
            <b-button
              v-else
              class="d-flex align-items-center"
              variant="warning"
              pill
            >
              <font-awesome-icon
                :icon="['fas', 'thumbs-up']"
                style="font-size: 18px"
                class="mr-2"
              />
              {{ thread.total_like }}
            </b-button>
          </b-button-group>
          <b-button-group size="sm">
            <b-button class="d-flex align-items-center ml-3" variant="white">
              <span class="material-icons"> repeat </span>
              <!-- {{ data.retweet }} -->
            </b-button>
            <b-button class="d-flex align-items-center mr-3" variant="white">
              <span class="material-icons"> chat_bubble_outline </span>
              <!-- {{ data.comment }} -->
            </b-button>
            <b-button class="d-flex align-items-center ml-5" variant="white">
              <span class="material-icons"> turned_in_not </span>
            </b-button>
            <b-button class="d-flex align-items-center" variant="white">
              <span class="material-icons"> more_horiz </span>
            </b-button>
          </b-button-group>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllThread',
  props: {
    thread: Object,
    index: Number,
  },
}
</script>

<style scoped>
#action .material-icons {
  width: 30px;
}

.btn-like-or-not {
  border-radius: 20px;
}
</style>
