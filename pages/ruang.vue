<template>
  <div class="d-flex">
    <div id="mid" class="col-md-7">
      <Header :judul="judul" />
      <div class="d-flex mt-3 justify-content-center">
        <b-button
          class="d-flex align-items-center btn-ruang mr-5"
          variant="outline-primary"
        >
          <span class="material-icons"> add_circle_outline </span>
          Buat Ruang
        </b-button>
        <b-button
          class="d-flex align-items-center btn-ruang"
          variant="outline-primary"
        >
          <span class="material-icons"> explore </span>
          Telusuri Ruang
        </b-button>
      </div>
      <div id="ruang-anda">
        <p class="subtitle mt-5 mb-3">Ruang Anda</p>
        <RuangAnda
          v-for="(data, index) in ruang"
          :key="index"
          :data="data"
          :index="data.id"
        />
      </div>
      <div id="temukan-ruang">
        <p class="subtitle mt-5 mb-3">Temukan Ruang</p>
        <Ruang
          v-for="(data, index) in ruang"
          :key="index"
          :data="data"
          :index="data.id"
        />
      </div>
    </div>
    <div id="right" class="mt-3 ml-3 w-100">
      <h5>Undangan yang Tersedia</h5>
      <Ruang
        v-for="(data, index) in ruang"
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
  name: 'RuangPage',
  middleware: 'loginOrNot',
  data() {
    return {
      judul: 'Ruang',
      ruang: [
        {
          display_profile:
            'https://images.unsplash.com/photo-1595338410601-1b8ff2cd9f8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          title: 'Ruang untuk mantan',
          logo: 'settings',
          jabatan: 'Admin',
          description: 'Sebuah ruang untuk mantanku',
        },
        {
          display_profile:
            'https://images.unsplash.com/photo-1598381734955-1ef8fc1fd4cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
          title: 'Jomblo Bahagia',
          logo: 'star',
          jabatan: 'Moderator',
          description: 'Sebuah ruang untuk mantanku',
        },
        {
          display_profile:
            'https://images.unsplash.com/photo-1595338410601-1b8ff2cd9f8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          title: 'Ruang untuk mantan',
          logo: 'person',
          jabatan: 'Member',
          description: 'Sebuah ruang untuk mantanku',
        },
      ],
    }
  },
}
</script>

<style scoped>
.btn-ruang {
  border-radius: 20px;
}
.material-icons {
  padding: 0 2px;
}
.subtitle {
  font-size: 26px;
}
</style>
