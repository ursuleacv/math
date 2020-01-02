<template>
  <div>
    <Multiplication op="x"/>
    <PlayHistory module="multiplication"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Multiplication from '@/components/Multiplication.vue'
import PlayHistory from '@/components/PlayHistory.vue'

export default {
  name: 'multiplication',
  components: {
    Multiplication,
    PlayHistory
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
