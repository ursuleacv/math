<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>Math for kids</h1>
    <div class="col-md-auto">
      <h3><router-link to="/addition">Addition (+)</router-link></h3>
      <h3><router-link to="/multiplication">Multiplication (*)</router-link></h3>
      <h3><router-link to="/conversion">Conversion (m,cm)</router-link></h3>
      <h3><router-link to="/polygonsNames">List of polygons(3-999)</router-link></h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  metaInfo: {
    title: 'Math for kids',
    titleTemplate: '%s - Home',
    // Define meta tags here.
    meta: [
      // {"http-equiv": 'Content-Type', content: 'text/html; charset=utf-8'},
      // {"name": 'viewport', content: 'width=device-width, initial-scale=1'},
      {"name": 'description', content: 'You can use Math exercises for kids on smartphones and tablets. ‎Maths for kids Age 6-9 '}
    ]
  }
}
</script>
