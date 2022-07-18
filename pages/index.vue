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
            v-b-modal.my-modal
            placeholder="Apa yang ingin anda tanyakan?"
            required
            class="input-form"
            readonly
          ></b-form-input>

          <!-- Modal -->
          <b-modal id="my-modal" title="Pertanyaan" hide-footer>
            <b-form @submit.prevent="ON_SUBMIT">
              <b-form-group id="input-pertanyaan">
                <b-form-input
                  id="input-1"
                  v-model="pertanyaan.judul"
                  type="text"
                  placeholder="Masukkan judul"
                  class="mb-2"
                  required
                ></b-form-input>
                <b-form-input
                  id="input-1"
                  v-model="pertanyaan.isi"
                  type="text"
                  placeholder="Apa yang ingin anda ceritakan?"
                  class="py-5"
                  required
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary" class="mt-2"
                >Buat Thread</b-button
              >
            </b-form>
          </b-modal>

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
        <Threads
          v-for="(thread, index) in all_threads"
          :key="index"
          :thread="thread"
          :index="thread.id"
        />
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
      pertanyaan: {
        judul: '',
        isi: '',
      },
      buttons: [
        { caption: 'Tanya', logo: 'help' },
        { caption: 'Jawab', logo: 'rate_review' },
        { caption: 'Tulis', logo: 'edit' },
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

  computed: {
    all_threads() {
      return this.$store.state.all_threads
    },
  },
  created() {
    this.GET_ALL_THREADS()
  },

  methods: {
    async GET_ALL_THREADS() {
      await this.$store.dispatch('GET_ALL_THREADS')
    },

    async ON_SUBMIT() {
      const data = {
        judul: this.pertanyaan.judul,
        isi: this.pertanyaan.isi,
        file: '',
        kategori_therad_id: '2',
      }
      // console.log(data)
      await this.$store.dispatch('CREATE_THREAD_NOT_IN_RUANG', data)
    },
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
</style>
