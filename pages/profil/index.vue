<template>
  <div class="d-flex">
    <b-col id="mid" class="col-md-7">
      <Header :judul="judul" />
      <div class="mt-3">
        <img
          v-if="user.foto == ''"
          src="https://picsum.photos/id/999/200/200"
          alt="banner image"
          class="img-banner"
        />
        <img v-else :src="user.foto" alt="banner image" class="img-banner" />
        <img
          v-if="user.foto == ''"
          src="https://picsum.photos/id/999/200/200"
          alt="display profile"
          class="img-dp"
        />
        <img v-else :src="user.foto" alt="display profile" class="img-dp" />
        <b-row class="px-3 mt-1">
          <b-col>
            <h6 class="m-0 profil-nama">{{ fullName }}</h6>
            <p class="text-secondary profil-profesi">{{ user.profesi }}</p>
          </b-col>
          <b-col cols="4">
            <b-button
              class="d-flex justify-content-center"
              variant="outline-primary"
              to="/profil/edit"
              pill
            >
              <span class="material-icons"> settings </span>
              Edit Profil
            </b-button>
          </b-col>
        </b-row>
        <b-row class="text-center mt-3">
          <b-col>
            <span v-if="followers == ''" class="text-primary">0</span>
            <span v-else class="text-primary">{{ followers }}</span>
            Pengikut
          </b-col>
          <b-col>
            <span v-if="following == ''" class="text-primary">0</span>
            <span v-else class="text-primary">{{ following }}</span>
            Mengikuti
          </b-col>
        </b-row>
        <b-row id="threads" class="text-center mt-4 mb-5">
          <b-col>
            <b-tabs content-class="mt-3" align="center">
              <b-tab title="Threads" active>
                <b-card-text>
                  <ThreadsUser
                    v-for="(thread, index) in threads"
                    :key="index"
                    :thread="thread"
                    :index="thread.id"
                  />
                </b-card-text>
              </b-tab>
              <b-tab title="Thread & Balasan" class="text-center ml-4 mr-4">
                <b-card-text>Tab contents 2</b-card-text>
              </b-tab>
              <b-tab title="Media">
                <b-card-text>Tab contents 3</b-card-text>
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </div>
    </b-col>
    <div id="right" class="mt-3 ml-3">
      <h5>Untuk anda ikuti</h5>
      <Follow
        v-for="(data, index) in follow"
        :key="index"
        :data="data"
        :index="data.id"
        class="mt-4"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  middleware: 'loginOrNot',
  data() {
    return {
      judul: 'Profil',
      user_dummy: {
        nama: 'Acul Sudrajat',
        total_thread: 15,
        display_pict:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        banner:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        pengikut: 99,
        mengikuti: 200,
      },
      follow: [
        {
          follow_profile:
            'https://cdn0-production-images-kly.akamaized.net/_rfkzsaD5kwdXm6Fme_xRPrzjrU=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3524834/original/046227400_1627540213-218283699_105887185027278_6019770676297843262_n.jpg',
          name: 'Reza Penyayang',
          description: 'Menguasai bahasa alien',
        },
        {
          follow_profile:
            'https://media.suara.com/pictures/970x544/2020/08/26/96687-padankan-hijab-dengan-masker-dok-instagrammouzaindonesia.jpg',
          name: 'Intan Puspitasari',
          description: 'mahasiswa',
        },
      ],
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },

    followers() {
      return this.$store.state.followers
    },

    following() {
      return this.$store.state.following
    },

    threads() {
      return this.$store.state.threads
    },

    fullName: {
      get() {
        return this.user.firstname + ' ' + this.user.lastname
      },
    },
  },

  created() {
    this.GET_FOLLOWERS()
    this.GET_FOLLOWING()
    this.GET_THREADS_BY_USER_ID()
  },

  methods: {
    async GET_FOLLOWERS() {
      await this.$store.dispatch('GET_FOLLOWERS')
    },

    async GET_FOLLOWING() {
      await this.$store.dispatch('GET_FOLLOWING')
    },

    async GET_THREADS_BY_USER_ID() {
      await this.$store.dispatch('GET_THREADS_BY_USER_ID')
    },
  },
}
</script>

<style scoped>
.profil-nama {
  font-size: 24px;
}

.profil-profesi {
  font-size: 12px;
}

.img-banner {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.img-dp {
  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: -50px;
  margin-left: 30px;
}

.thread {
  color: black;
}
.thread:hover {
  color: #007add;
}
.threads {
  border: none;
}
</style>
