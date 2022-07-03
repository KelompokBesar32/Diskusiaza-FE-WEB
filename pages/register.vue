<template>
  <div>
    <section class="form my-4 mx-5">
      <div class="container">
        <div class="row no-gutters">
          <div class="col-lg-12 px-5 pt-5">
            <h3>Daftar</h3>
            <form>
              <div class="row">
                <div class="col-6">
                  <input
                    type="text"
                    placeholder="Nama Depan"
                    class="form-control my-3 p-4"
                  />
                </div>
                <div class="col-6">
                  <input
                    type="text"
                    placeholder="Nama Belakang"
                    class="form-control my-3 p-4"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <input
                    type="email"
                    placeholder="Email"
                    class="form-control my-3 p-4"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <input
                    type="Password"
                    placeholder="Password"
                    class="form-control my-3 p-4"
                  />
                </div>
                <div class="col-6">
                  <input
                    type="Password"
                    placeholder="Confirm Password"
                    class="form-control my-3 p-4"
                  />
                </div>
              </div>
              <h4>Tanggal Lahir</h4>
              <div class="row">
                <div class="col-3">
                  <input
                    type="date"
                    placeholder="day"
                    class="form-control my-3 p-4"
                  />
                </div>
                <div class="col-3">
                  <input
                    type="date"
                    placeholder="month"
                    class="form-control my-3 p-4"
                  />
                </div>
                <div class="col-3">
                  <input
                    type="date"
                    placeholder="year"
                    class="form-control my-3 p-4"
                  />
                </div>
                <div class="col-3"></div>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1"
                  >Laki-laki</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2"
                  >Perempuan</label
                >
              </div>
              <div class="row">
                <div class="col-12">
                  <button type="button" class="btn1 mt-3 mb-5">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RegisterPages',
  layout: 'auth',
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* background-color: blue; */
}
body {
  background: white;
}
.row {
  background: #cce4f8;
  border-radius: 30px;
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
  background: black;
  border: 1px solid;
  color: white;
}
</style>
