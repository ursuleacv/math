<template>
  <div>
    <Conversion op="->"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Conversion from '@/components/Conversion.vue'

export default {
  name: 'conversion',
  components: {
    Conversion
  },
  metaInfo: {
    title: 'Math for kids',
    titleTemplate: '%s - Metric Measurement Conversion',
    // Define meta tags here.
    meta: [
      // {"http-equiv": 'Content-Type', content: 'text/html; charset=utf-8'},
      // {"name": 'viewport', content: 'width=device-width, initial-scale=1'},
      {"name": 'description', content: 'Metric Measurement Conversion. ‎Maths for kids Age 6-9 '}
    ]
  }
}
</script>
