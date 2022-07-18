<template>
  <b-sidebar
    visible
    no-close-on-backdrop
    no-header-close
    no-close-on-route-change
  >
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
            :to="btn.link"
          >
            <span class="d-flex justify-content-start">
              <span class="material-icons"> {{ btn.logo }} </span>
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
        <div id="profile" class="d-flex ml-2 mt-3">
          <b-img-lazy
            v-if="user.foto == ''"
            src="https://picsum.photos/id/999/200/200"
            class="img-dp"
          ></b-img-lazy>
          <b-img-lazy v-else :src="user.foto" class="img-dp"></b-img-lazy>
          <div class="d-inline ml-2">
            <h6>{{ fullName }}</h6>
            <p class="text-secondary text-sm">{{ user.email }}</p>
          </div>
          <b-button
            variant="light"
            class="ml-auto mb-3"
            size="sm"
            @click="LOGOUT"
          >
            <font-awesome-icon
              :icon="['fas', 'right-from-bracket']"
              style="font-size: 17px"
            />
          </b-button>
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
        { caption: 'Home', logo: 'home', link: '/' },
        { caption: 'Explore', logo: 'explore', link: '#' },
        { caption: 'Trending', logo: 'whatshot', link: '#' },
        {
          caption: 'Notification',
          logo: 'notifications',
          link: '/notification',
        },
        { caption: 'Message', logo: 'mail', link: '#' },
        { caption: 'Bookmarks', logo: 'bookmark', link: '#' },
        { caption: 'Jawab', logo: 'edit', link: '/jawab' },
        { caption: 'Ruang', logo: 'group', link: '/ruang' },
        { caption: 'Profil', logo: 'person', link: '/profil' },
      ],
    }
  },

  computed: {
    user() {
      return this.$store.state.user
    },

    fullName: {
      get() {
        return this.user.firstname + ' ' + this.user.lastname
      },

      // set(newValue) {
      //   // Note: we are using destructuring assignment syntax here.
      //   [this.firstName, this.lastName] = newValue.split(' ')
      // }
    },
  },

  created() {
    this.GET_PROFILE()
  },

  methods: {
    async GET_PROFILE() {
      await this.$store.dispatch('GET_PROFILE')
    },

    async LOGOUT() {
      await this.$store.dispatch('LOGOUT')
    },
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

.text-sm {
  font-size: 13px;
}

.img-dp {
  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
