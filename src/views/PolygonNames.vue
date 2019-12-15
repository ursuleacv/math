<template>
  <div>
    <CPolygonNames/>
  </div>
</template>

<script>
// @ is an alias to /src
import CPolygonNames from '@/components/CPolygonNames.vue'

export default {
  name: 'PolygonNames',
  components: {
    CPolygonNames
  },
  metaInfo: {
    title: 'Math for kids',
    titleTemplate: '%s - Polygons',
    // Define meta tags here.
    meta: [
      // {"http-equiv": 'Content-Type', content: 'text/html; charset=utf-8'},
      // {"name": 'viewport', content: 'width=device-width, initial-scale=1'},
      {"name": 'description', content: 'In geometry, a polygon is traditionally a plane figure that is bounded by a finite chain of straight line segments closing in a loop to form a closed chain'}
    ]
  }
}
</script>
