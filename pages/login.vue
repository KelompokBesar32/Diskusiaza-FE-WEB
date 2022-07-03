<template>
  <b-container class="my-4">
    <b-row class="content">
      <b-col class="px-5 pt-5 bg-login" cols="6">
        <b-form @submit.prevent="ON_SUBMIT">
          <h3>Masuk</h3>
          <b-form-group id="email" label-for="email" class="mt-3">
            <b-form-input
              id="email"
              v-model="email"
              type="email"
              placeholder="Email"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="password" label-for="password" class="mt-3">
            <b-form-input
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-checkbox class="my-3">Ingat Saya</b-form-checkbox>
          <b-button type="submit" variant="primary" pill class="col-lg-12 mb-3">
            Submit
          </b-button>
          <p class="social-text">- Or Log in with -</p>
          <b-container class="social-media">
            <a href="#" class="social-icon">
              <font-awesome-icon :icon="['fab', 'apple']" />
            </a>
            <a href="#" class="social-icon">
              <font-awesome-icon :icon="['fab', 'google']" />
            </a>
            <a href="#" class="social-icon">
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                style="font-size: 22px"
              />
            </a>
          </b-container>
        </b-form>
      </b-col>
      <b-col cols="6" class="m-0 p-0">
        <img
          src="~/assets/login.png"
          class="img-fluid background"
          alt="Background Side"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'LoginPages',
  layout: 'auth',
  middleware: 'isLogin',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async ON_SUBMIT() {
      const data = {
        email: this.email,
        password: this.password,
      }
      await this.$store.dispatch('SIGN_IN', data)
    },
  },
}
</script>

<style>
.content {
  margin: 0 80px;
}

.bg-login {
  background: #cce4f8;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
.background {
  height: 75vh;
  width: 100%;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

.social-text {
  text-align: center;
  /* padding: 0.7rem 0; */
  font-size: 1 rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  border: 1px solid #333;
  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
  border-radius: 50%;
  transition: 0.3s;
}

.social-icon:hover {
  color: #4481eb;
  border-color: #4481eb;
}
</style>
