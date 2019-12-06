<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Multiplication msg="*"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Multiplication from '@/components/Multiplication.vue'

export default {
  name: 'home',
  components: {
    Multiplication
  }
}
</script>
