<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Multiplication op="x"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Multiplication from '@/components/Multiplication.vue'

export default {
  name: 'home',
  components: {
    Multiplication
  },
  metaInfo: {
    title: 'Math for kids',
    titleTemplate: '%s - Multiplication',
    // Define meta tags here.
    meta: [
      // {"http-equiv": 'Content-Type', content: 'text/html; charset=utf-8'},
      // {"name": 'viewport', content: 'width=device-width, initial-scale=1'},
      {"name": 'description', content: 'You can use Math exercises for kids on smartphones and tablets. ‎Maths for kids Age 6-9 '}
    ]
  }
}
</script>
