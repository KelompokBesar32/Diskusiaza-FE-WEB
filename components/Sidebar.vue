<template>
  <b-sidebar visible no-close-on-backdrop no-header-close>
    <b-container>
      <Logo class="pl-3" />

      <div class="d-flex flex-column">
        <b-button-group size="md" vertical>
          <b-button
            v-for="(btn, idx) in buttons"
            id="button-sidebar"
            :key="idx"
            variant="white"
            class="m-1"
          >
            <span class="d-flex justify-content-start">
              <b-icon :icon="btn.logo" variant="dark"> </b-icon>
              <span class="pl-4">
                {{ btn.caption }}
              </span>
            </span>
          </b-button>
        </b-button-group>
        <b-button
          id="button-thread"
          pill
          class="ml-3 mt-2 font-weight-bold"
          variant="primary"
        >
          Buat Thread
        </b-button>
        <br />
        <div id="profile" class="d-flex ml-3 mt-3">
          <b-img-lazy
            src="https://picsum.photos/id/999/200/200"
            rounded="circle"
            height="50px"
          ></b-img-lazy>
          <div class="d-grid ml-2">
            <h6>Acul Sudrajad</h6>
            <p class="text-secondary">Sarjana Jomblo</p>
          </div>
        </div>
      </div>
    </b-container>
  </b-sidebar>
</template>

<script>
export default {
  name: 'SidebarCom',
  data() {
    return {
      buttons: [
        { caption: 'Home', logo: 'house-door-fill' },
        { caption: 'Explore', logo: 'compass-fill' },
        { caption: 'Trending', logo: 'megaphone-fill' },
        { caption: 'Notification', logo: 'bell-fill' },
        { caption: 'Message', logo: 'envelope-fill' },
        { caption: 'Bookmarks', logo: 'bookmark-check-fill' },
        { caption: 'Jawab', logo: 'file-earmark-plus-fill' },
        { caption: 'Ruang', logo: 'people-fill' },
        { caption: 'Profil', logo: 'person-fill' },
      ],
    }
  },
}
</script>

<style scoped>
#button-thread {
  width: 170px;
}
#button-sidebar:hover {
  transition: 0.5s;
  background-color: #cce4f8;
}
</style>
