<template>
  <div class="d-flex">
    <b-col id="mid" class="col-md-7">
      <b-row>
        <b-col>
          <Header :judul="judul" />
        </b-col>
        <b-col></b-col>

        <b-col class="ml-5">
          <span>
            <b-button pill variant="outline-primary">Simpan</b-button>
          </span>
        </b-col>
      </b-row>

      <span class="ml-5"> </span>
      <div class="mt-3">
        <img :src="user.banner" alt="" class="img-banner" />
        <img :src="user.display_pict" alt="" class="img-dp" />
        <b-row class="px-2 mt-3">
          <div role="group">
            <label for="input-live">Nama</label>
            <b-form-input
              id="input-live"
              v-model="name"
              :state="nameState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter your name"
              trim
            ></b-form-input>
          </div>
        </b-row>
        <b-row class="px-2 mt-3">
          <div role="group">
            <label for="input-live">Keahlian atau Gelar</label>
            <b-form-input
              id="input-live"
              v-model="name"
              :state="nameState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter your name"
              trim
            ></b-form-input>
          </div>
        </b-row>
      </div>
    </b-col>
    <b-col id="right" class="mt-2 text-start">
      <div id="right" class="mt-3 ml-3 w-100">
        <h5>Untuk anda ikuti</h5>
        <Follow
          v-for="(data, index) in follow"
          :key="index"
          :data="data"
          :index="data.id"
          class="mt-4"
        />
      </div>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'EditProfil',
  data() {
    return {
      judul: 'Edit Profil',
      user: {
        display_pict:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        banner:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
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
