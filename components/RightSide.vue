<template>
  <div>
    <b-input-group
      prepend-html='<span class="material-icons">search</span>'
      class="pr-4"
    >
      <b-form-input></b-form-input>
    </b-input-group>
    <h5 class="my-3">Ruang Untuk Anda Ikuti</h5>
    <Ruang
      v-for="(data, index) in ruang"
      :key="index"
      :data="data"
      :index="data.id"
    />
  </div>
</template>

<script>
export default {
  name: 'RightSideComp',
  data() {
    return {
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

<style></style>
