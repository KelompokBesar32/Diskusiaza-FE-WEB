<template>
  <div>
    <div class="container">
      <div class="forms-container">
        <div class="login">
          <form action="" class="login-form">
            <h2 class="title">Log In</h2>
            <div class="input-field">
              <!-- <i class="fas fa-user"></i> -->
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <!-- <i class="fas fa-lock"></i> -->
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
            <p class="social-text">Or Log in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <!-- <font-awesome-icon icon="fa-brands fa-apple"
              />--></a
              >
              <a href="#" class="social-icon">
                <!-- <fa :icon="['fas', 'adjust']"
              />-->
              </a>
              <a href="#" class="social-icon">
                <!-- <font-awesome-icon icon="fa-brands fa-facebook"
              />-->
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginPages',
  layout: 'auth',
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body,
input {
  font-family: 'Poppins', sans-serif;
}

.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field {
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
}
.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  font-size: 1.1rem;
}
.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1 rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}
.btn {
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;
  background-color: #5995fd;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;
}
.btn:hover {
  background-color: #4d84e2;
}

.social-text {
  padding: 0.7rem 0;
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
