<template>
  <div class="d-flex">
    <b-col id="mid" class="col-md-7">
      <Header :judul="judul" />
      <div class="d-flex mt-3 mb-5 justify-content-center">
        <b-button
          class="d-flex align-items-center btn-like-or-not btn-ruang mr-5"
          variant="outline-primary"
        >
          <span class="material-icons"> done_all </span>
          Tandai sudah dibaca
        </b-button>
        <b-button
          class="d-flex align-items-center btn-like-or-not btn-ruang"
          variant="outline-primary"
        >
          <span class="material-icons"> settings </span>
          Setelan
        </b-button>
      </div>
      <Notifications
        v-for="(data, index) in ruang"
        :key="index"
        :data="data"
        :index="data.id"
      />
    </b-col>
    <b-col id="right" class="mt-2 text-start">
      <RightSide />
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'NotificationPage',
  middleware: 'loginOrNot',
  data() {
    return {
      judul: 'Notification',
      ruang: [
        {
          display_profile:
            'https://images.unsplash.com/photo-1595338410601-1b8ff2cd9f8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          title: 'Ruang untuk mantan',
          date: '28 Mei 2022',
          by: 'Bambang Tamvan',
          status: 'Sebutkan 5 nama-nama mantan terindah kamu?',
          description: 'Sebuah ruang untuk mantanku',
        },
        {
          display_profile:
            'https://images.unsplash.com/photo-1598381734955-1ef8fc1fd4cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
          title: 'Jomblo Bahagia',
          date: '28 Mei 2022',
          by: 'Rusman',
          status: 'Berapa lama lu jomblo?',
          description: 'Sebuah ruang untuk mantanku',
        },
        {
          display_profile:
            'https://akcdn.detik.net.id/visual/2020/11/16/demon-slayer-mugen-train-4_169.png?w=650',
          title: 'Wibu Parah',
          date: '28 Mei 2022',
          by: 'Sariadi',
          status: 'Sebutkan Waifu kamu?',
          description: 'Sebuah ruang untuk mantanku',
        },
      ],
    }
  },
}
</script>

<style scoped>
.material-icons {
  padding: 0 2px;
}

.btn-ruang {
  border-radius: 20px;
}


</style>
