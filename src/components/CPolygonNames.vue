<template>
  <div class="container">
    <h2>List of polygons (3-999)</h2>
    <div class="row justify-content-center">
      <ul class="list-group text-left">
        <li v-for="polygon of polygons" v-bind:key="polygon" class="list-group-item">
          {{ polygon.side }} - {{ polygon.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CPolygonNames",
  props: {
  },
  data: function() {
    return {
      polygons: [],
    };
  },
  mounted: function(){
    this.onStart();
  },
  methods: {
    onStart: function() {
      for(let i = 3; i <= 999; i++){
        const p = this.getName(i);
        this.polygons.push({side: i, name: p});
      }
    },
    getName: function(i){
      let o = '0hena0di0tri0tetra0penta0hexa0hepta0octa0nona'.split(0);
      let d = '0W0icosi0triaQ0tetraQ0pentaQ0hexaQ0heptaQ0octaQ0nonaQ'.split(0);
      let t = 'W0unW0doW0triskaiW0tetraW0pentaW0hexaW0heptaW0octaW0nonaW0icosa'.split(0);
      let x = ('000'+i).substr(-3).split('');
      let r = (i<10?o[i]:i<21?t[i-10]:i==100?'hecto':(i<100?'':i<200?'hecta':o[x[0]]+'hecta')+d[x[1]]+'kai'+o[x[2]]).replace(/Q/g,'conta').replace(/W/g,'deca')+'gon';
      return r;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
