<template>
  <div>
    <section class="form my-4 mx-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-lg-6 px-5 pt-5">
            <h3>Masuk</h3>
            <form>
              <div class="from-row">
                <div class="col-lg-12">
                  <input
                    type="email"
                    placeholder="Email-Adrress"
                    class="form-control my-3 p-4"
                  />
                </div>
              </div>
              <div class="from-row">
                <div class="col-lg-12">
                  <input
                    type="password"
                    placeholder="********"
                    class="form-control my-3 p-4"
                  />
                </div>
              </div>

              <div class="form-check">
                <div class="col-lg-12">
                  <input
                    id="invalidCheck2"
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    required
                  />
                  <label class="form-check-label" for="invalidCheck2">
                    Ingat Saya</label
                  >
                </div>
              </div>

              <div class="from-row">
                <div class="col-lg-12">
                  <button type="button" class="btn1 mt-3 mb-5">Login</button>
                </div>
              </div>
              <p class="social-text">- Or Log in with -</p>
              <div class="social-media">
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
                <a href=""></a>
              </div>
            </form>
          </div>
          <div class="col-lg-6">
            <img src="../assets/login.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
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
body {
  background: white;
}
.row {
  background: #cce4f8;
  border-radius: 30px;
  box-shadow: 12px 12px 22px whitesmoke;
}
img {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}
.btn1 {
  border: none;
  outline: none;
  height: 50px;
  width: 100%;
  background-color: blue;
  color: white;
  border-radius: 25px;
  font-weight: bold;
}
.btn1:hover {
  background: rgb(76, 182, 201);
  border: 1px solid;
  color: black;
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
