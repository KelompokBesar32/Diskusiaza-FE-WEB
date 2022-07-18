<template>
  <div class="d-flex">
    <b-col id="mid" class="col-md-7">
      <Header :judul="judul" />
      <div id="profile" class="d-flex ml-3 mt-3">
        <b-img-lazy
          src="https://picsum.photos/id/999/200/200"
          rounded="circle"
          height="40px"
        ></b-img-lazy>
        <div class="d-grid ml-3">
          <b-form-input
            placeholder="Apa yang ingin anda tanyakan?"
            required
            class="input-form"
          ></b-form-input>
          <b-button-group size="sm" class="mt-2 d-flex justify-content-between">
            <b-button v-for="(btn, idx) in buttons" :key="idx" variant="white">
              <span class="d-flex justify-content-start align-items-center">
                <span class="material-icons">{{ btn.logo }}</span>
                <span class="ml-1 mr-2">{{ btn.caption }}</span>
              </span>
            </b-button>
          </b-button-group>
        </div>
      </div>
      <div class="d-flex flex-column ml-3 mt-5">
        <div v-for="(data, idx) in profile" :key="idx">
          <div class="d-flex my-3">
            <b-img-lazy
              src="https://picsum.photos/id/999/200/200"
              rounded="circle"
              height="40px"
            />
            <span class="d-flex flex-column ml-3">
              <span class="normal">{{ data.user }} - Ikuti</span>
              <p id="da-secondary-text" class="text-secondary">
                {{ data.profesi }}
              </p>
              <p class="normal font-weight-bold">
                {{ data.title }}
              </p>
              <p>
                {{ data.content }}
              </p>
              <div id="action" class="d-flex align-items-center">
                <b-button-group size="sm">
                  <b-button
                    class="d-flex align-items-center btn-like-or-not"
                    variant="primary"
                  >
                    <span class="material-icons"> arrow_upward </span>
                    {{ data.like }}
                  </b-button>
                  <b-button
                    class="d-flex align-items-center btn-like-or-not"
                    variant="danger"
                  >
                    <span class="material-icons"> arrow_downward </span>
                    {{ data.dislike }}
                  </b-button>
                </b-button-group>
                <b-button-group size="sm">
                  <b-button
                    class="d-flex align-items-center ml-3"
                    variant="white"
                  >
                    <span class="material-icons"> repeat </span>
                    {{ data.retweet }}
                  </b-button>
                  <b-button
                    class="d-flex align-items-center mr-3"
                    variant="white"
                  >
                    <span class="material-icons"> chat_bubble_outline </span>
                    {{ data.comment }}
                  </b-button>
                  <b-button
                    class="d-flex align-items-center ml-5"
                    variant="white"
                  >
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
      </div>
    </b-col>
    <b-col id="right" class="mt-2 text-start">
      <RightSide />
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'loginOrNot',
  data() {
    return {
      judul: 'Home',
      buttons: [
        { caption: 'Tanya', logo: 'help' },
        { caption: 'Jawab', logo: 'rate_review' },
        { caption: 'Tulis', logo: 'edit' },
      ],
      profile: [
        {
          user: 'Mamat Alkitri',
          profesi: 'Mahasiswa',
          title:
            'Mengapa orang-orang masih memilih jurusan kuliah pendidikan?Bukankah menjadi guru gajinya kecil?',
          content:
            'Saya kuliah jurusan Pendidikan Bahasa Inggris di Universitas Brawijaya Malang.',
          like: '20',
          dislike: '5',
          retweet: '30',
          comment: '14',
        },
        {
          user: 'Mamat Alkitri',
          profesi: 'Mahasiswa',
          title:
            'Mengapa orang-orang masih memilih jurusan kuliah pendidikan?Bukankah menjadi guru gajinya kecil?',
          content:
            'Saya kuliah jurusan Pendidikan Bahasa Inggris di Universitas Brawijaya Malang.',
          like: '20',
          dislike: '5',
          retweet: '30',
          comment: '14',
        },
        {
          user: 'Mamat Alkitri',
          profesi: 'Mahasiswa',
          title:
            'Mengapa orang-orang masih memilih jurusan kuliah pendidikan?Bukankah menjadi guru gajinya kecil?',
          content:
            'Saya kuliah jurusan Pendidikan Bahasa Inggris di Universitas Brawijaya Malang.',
          like: '20',
          dislike: '5',
          retweet: '30',
          comment: '14',
        },
      ],
      ruang: [
        {
          display_profile:
            'https://images.unsplash.com/photo-1595338410601-1b8ff2cd9f8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          title: 'Ruang untuk mantan',
          description: 'Sebuah ruang untuk mantanku',
        },
        {
          display_profile:
            'https://images.unsplash.com/photo-1598381734955-1ef8fc1fd4cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
          title: 'Jomblo Bahagia',
          description: 'Jomblo gak bahagia? GA JAMAN!!!',
        },
        {
          display_profile:
            'https://images.unsplash.com/photo-1595338410601-1b8ff2cd9f8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          title: 'Ruang untuk mantan',
          description: 'Sebuah ruang untuk mantanku',
        },
        {
          display_profile:
            'https://images.unsplash.com/photo-1598381734955-1ef8fc1fd4cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
          title: 'Jomblo Bahagia',
          description: 'Jomblo gak bahagia? GA JAMAN!!!',
        },
      ],
    }
  },
}
</script>
<style scoped>
.input-form {
  border-radius: 20px;
  width: 350px;
  padding: 0 20px;
  font-size: 14px;
}

#action .material-icons {
  width: 30px;
}

.btn-like-or-not {
  border-radius: 20px;
}
</style>
