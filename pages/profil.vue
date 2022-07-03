<template>
  <div class="d-flex">
    <b-col id="mid" class="col-md-7">
      <Header :judul="judul" />
      <div class="mt-3">
        <img :src="user.banner" alt="" class="img-banner" />
        <img :src="user.display_pict" alt="" class="img-dp" />
        <b-row class="px-3 mt-1">
          <b-col>
            <h6 class="m-0 profil-nama">{{ user.nama }}</h6>
            <p class="text-secondary profil-profesi">{{ user.profesi }}</p>
          </b-col>
          <b-col>
            <b-button
              class="d-flex align-items-center btn-ruang ml-auto"
              variant="outline-primary"
            >
              <span class="material-icons"> settings </span>
              Edit Profil
            </b-button>
          </b-col>
        </b-row>
        <b-row class="text-center mt-3">
          <b-col>
            <span class="text-primary">{{ user.pengikut }}</span>
            Pengikut</b-col
          >
          <b-col
            ><span class="text-primary">{{ user.mengikuti }}</span>
            Mengikuti</b-col
          >
        </b-row>
      </div>
    </b-col>
    <b-col id="right"> Tes </b-col>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  middleware: 'loginOrNot',
  data() {
    return {
      judul: 'Profil',
      user: {
        nama: 'Acul Sudrajat',
        total_thread: 15,
        display_pict:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        banner:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        profesi: 'Sarjana Jomblo',
        pengikut: 99,
        mengikuti: 200,
      },
    }
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

#right {
  background-color: red;
}
.btn-ruang {
  border-radius: 20px;
}
</style>
