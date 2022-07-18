<template>
  <div class="d-flex">
    <b-col id="mid" class="col-md-7">
      <span class="d-flex align-items-center justify-content-between">
        <Header :judul="judul" />
        <!-- <b-button pill variant="outline-primary"> Simpan </b-button> -->
      </span>
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
        <b-form class="mt-3" @submit.prevent="onSubmit">
          <b-form-group id="input-group-1" label="Nama: ">
            <b-form-input
              id="input-1"
              v-model="fullName"
              type="text"
              placeholder="Masukkan nama anda"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Email:">
            <b-form-input
              id="input-2"
              v-model="user.email"
              placeholder="Masukkan alamat email anda"
              type="email"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="outline-primary" pill
            >Submit</b-button
          >
        </b-form>
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
  name: 'EditProfil',
  middleware: 'loginOrNot',
  data() {
    return {
      judul: 'Edit',
      update_user: {
        nama: '',
        email: '',
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
    fullName: {
      get() {
        return this.user.firstname + ' ' + this.user.lastname
      },

      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        ;[this.firstName, this.lastName] = newValue.split(' ')
      },
    },
  },

  methods: {
    // onSubmit(value) {
    //   console.log(value)
    // },
  },
}
</script>

<style scoped>
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
</style>
