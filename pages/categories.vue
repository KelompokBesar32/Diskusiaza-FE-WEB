<template>
  <div class="categories">
    <!-- <div class="container">
      <h3>Pilih ruang baca yang kammu sukai</h3>
      <div class="row">
        <div class="card" style="width: 15rem; text-align: center">
          <img src="../assets/login.png" class="card-img-top" alt="" />
          <div class="card-body">
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
        <div class="card" style="width: 15rem; text-align: center">
          <img src="../assets/login.png" class="card-img-top" alt="" />
          <div class="card-body">
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
        <div class="card" style="width: 15rem; text-align: center">
          <img src="../assets/login.png" class="card-img-top" alt="" />
          <div class="card-body">
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
        <div class="card" style="width: 15rem; text-align: center">
          <img src="../assets/login.png" class="card-img-top" alt="" />
          <div class="card-body">
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
        <div class="card" style="width: 15rem; text-align: center">
          <img src="../assets/login.png" class="card-img-top" alt="" />
          <div class="card-body">
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
        <div class="card" style="width: 15rem; text-align: center">
          <img src="../assets/login.png" class="card-img-top" alt="" />
          <div class="card-body">
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
    </div> -->
    <div class="container">
      <h8 class="title">Pilih ruang baca yang kamu sukai</h8>
      <div class="products-container">
        <div class="product" data-name="p-1">
          <img
            src="../assets/science.jpg"
            alt=""
            style="height: 100px; width: 75px"
          />
          <button type="button" class="btn1">Sains & Teknologi</button>
        </div>
        <div class="product" data-name="p-2">
          <img
            src="../assets/politic.jpg"
            alt=""
            style="height: 100px; width: 75px"
          />
          <button type="button" class="btn1">Ilmu Politik</button>
        </div>
        <div class="product" data-name="p-3">
          <img
            src="../assets/broke.jpg"
            alt=""
            style="height: 100px; width: 75px"
          />
          <button type="button" class="btn1">Patah Hati</button>
        </div>
        <div class="product" data-name="p-4">
          <img
            src="../assets/psikolog.jpg"
            alt=""
            style="height: 100px; width: 75px"
          />
          <button type="button" class="btn1">Psikologi Hidup</button>
        </div>
        <div class="product" data-name="p-5">
          <img
            src="../assets/pasangan.jpg"
            alt=""
            style="height: 100px; width: 75px"
          />
          <button type="button" class="btn1">Pasangan</button>
        </div>
        <div class="product" data-name="p-6">
          <img
            src="../assets/dinamika.jpg"
            alt=""
            style="height: 100px; width: 75px"
          />
          <button type="button" class="btn1">Dinamika Sosial</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesPages',
  layout: 'auth',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* outline: none;
  border: none; */
  transition: all 0.2s linier;
  text-transform: capitalize;
}
.categories {
  font-size: 60%;
  overflow-x: hidden;
  background: #fff;
}
.body {
  background: #fff;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 2rem;
  background-color: #fff;
}
.title {
  font-size: 2rem;
  color: #444;
  margin-bottom: 4rem;
  text-align: center;
  display: block;
  margin: auto;
}
.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
}
.product {
  text-align: center;
  padding: 3rem 2rem;
  background: #fff;

  cursor: pointer;
  height: 175px;
  width: 150px;

  display: block;
  margin: auto;
}

.product:hover .img {
  transform: scale(0.9);
}
.btn1 {
  margin-top: 25%;
  border-radius: 30%;
  margin-bottom: 50%;
}
</style>
