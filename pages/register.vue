<template>
  <b-container class="my-4">
    <b-row class="content bg-color">
      <b-col class="px-5 pt-5">
        <h3 class="title">Daftar</h3>
        <b-form @submit.prevent="ON_SUBMIT">
          <b-row>
            <b-col>
              <b-form-group id="firstname" label-for="firstname">
                <b-form-input
                  id="firstname"
                  v-model="firstname"
                  placeholder="Nama Depan"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group id="lastname" label-for="lastname">
                <b-form-input
                  id="lastname"
                  v-model="lastname"
                  placeholder="Nama Belakang"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group id="email" label-for="email">
                <b-form-input
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="Email"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group id="password" label-for="password">
                <b-form-input
                  id="password"
                  v-model="password"
                  type="password"
                  placeholder="Password"
                  required
                ></b-form-input>
                <b-form-invalid-feedback :state="length_password">
                  Password anda kurang dari 8 karakter
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group id="confirm_password" label-for="confirm_password">
                <b-form-input
                  id="confirm_password"
                  v-model="confirm_password"
                  type="password"
                  placeholder="Confirm Password"
                  required
                ></b-form-input>

                <b-form-invalid-feedback :state="validation">
                  Password anda tidak sama
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
          </b-row>
          <h4 class="title">Tanggal Lahir</h4>
          <b-row>
            <b-col>
              <b-form-select
                id="tanggal"
                v-model="tanggal"
                :options="options.tanggal"
              >
                <template #first>
                  <b-form-select-option value="" disabled>
                    Tanggal
                  </b-form-select-option>
                </template>
              </b-form-select>
            </b-col>
            <b-col>
              <b-form-select
                id="bulan"
                v-model="bulan"
                :options="options.bulan"
              >
                <template #first>
                  <b-form-select-option value="" disabled>
                    Bulan
                  </b-form-select-option>
                </template>
              </b-form-select>
            </b-col>
            <b-col>
              <b-form-select
                id="tahun"
                v-model="tahun"
                :options="options.tahun"
              >
                <template #first>
                  <b-form-select-option value="" disabled>
                    Tahun
                  </b-form-select-option>
                </template>
              </b-form-select>
            </b-col>
          </b-row>
          <b-form-radio-group
            id="jenis_kelamin"
            v-model="jenis_kelamin"
            :options="options.jenis_kelamin"
            class="my-3"
            value-field="value"
            text-field="text"
            disabled-field="notEnabled"
            required
          ></b-form-radio-group>
          <b-button
            type="submit"
            variant="primary"
            pill
            class="col-lg-12 mt-3 mb-5"
          >
            Sign Up
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'RegisterPages',
  layout: 'auth',
  middleware: 'isLogin',
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirm_password: '',
      tanggal: '',
      bulan: '',
      tahun: '',
      jenis_kelamin: '',
      options: {
        tanggal: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ],
        bulan: [
          { value: 1, text: 'Januari' },
          { value: 2, text: 'Februari' },
          { value: 3, text: 'Maret' },
          { value: 4, text: 'April' },
          { value: 5, text: 'Mei' },
          { value: 6, text: 'Juni' },
          { value: 7, text: 'Juli' },
          { value: 8, text: 'Agustus' },
          { value: 9, text: 'September' },
          { value: 10, text: 'Oktober' },
          { value: 11, text: 'November' },
          { value: 12, text: 'Desember' },
        ],
        tahun: ['1998', '1999', '2000', '2001'],
        jenis_kelamin: [
          { value: 'L', text: 'Laki-laki' },
          { value: 'P', text: 'Perempuan' },
        ],
      },
    }
  },
  computed: {
    validation() {
      // eslint-disable-next-line eqeqeq
      return this.password == this.confirm_password
    },

    length_password() {
      return this.password.length > 7
    },
  },
  methods: {
    async ON_SUBMIT() {
      if (!this.validation || !this.length_password) {
        this.$swal.fire({
          icon: 'error',
          text: 'Kesalahan Password',
        })
      } else {
        const dataTanggal = this.tahun + '-' + this.bulan + '-' + this.tanggal
        const data = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          tanggal_lahir: dataTanggal,
          jenis_kelamin: this.jenis_kelamin,
        }
        await this.$store.dispatch('SIGN_UP', data)
      }
    },
  },
}
</script>

<style scoped>
.content {
  margin: 0 80px;
}

.title {
  margin-bottom: 20px;
}

.bg-color {
  background: #cce4f8;
  border-radius: 30px;
}
</style>
