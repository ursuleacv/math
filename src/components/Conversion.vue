<template>
  <div class="container">
    <h2>Conversion (cm, m)</h2>
    <div class="row justify-content-center">
      <div class="col-12 col-md-auto">
        <div class="form-group">
          <label>Max Number:</label>
          <input v-model="maxNumber1" type="text" class="form-control" placeholder="Max Number 1" />
        </div>
      </div>
      <div class="col-12 col-md-auto">
        <div class="form-group">
          <label>From:</label>
          <select v-model="from" class="form-control">
            <option value="mm">mm</option>
            <option value="cm">cm</option>
            <option value="dm">dm</option>
            <option value="m">m</option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md-auto">
        <div class="form-group">
          <label>To:</label>
          <select v-model="to" class="form-control">
            <option value="mm">mm</option>
            <option value="cm">cm</option>
            <option value="dm">dm</option>
            <option value="m">m</option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md-auto">
        <div class="form-group">
          <label>Exercises:</label>
          <input v-model="maxCols" type="text" class="form-control" placeholder="Max Cols" />
        </div>
      </div>
      <div class="col-12 col-md-auto">
        <div class="form-group">
          <label>Press start to begin</label>
          <button v-on:click.prevent="onStart" class="btn btn-outline-primary w-100">Start</button>
        </div>
      </div>
    </div>

    <form class="form-inline needs-validation" novalidate>
      <div class="container">
        <div class="row mt-5">
        <div v-for="(exercise, id) in exercises" :key="id" class="col-12 col-sm-4 col-md-3">
          <div class="form-group">
            <p>
              <span class="exercise">{{exercise.a}} {{from}} -> {{to}} =</span>
              <input
                v-model="exercise.r"
                type="text"
                class="form-control text-center"
                v-bind:class="{ 'is-valid': exercise.isCorrect, 'is-invalid': exercise.isCorrect==false}"
              />
            </p>
          </div>
        </div>
      </div>
      </div>
    </form>

    <div v-if="started" class="row mt-5">
      <div class="col">
        <div
          v-if="finished"
          class="col final-score alert alert-primary"
        >Score: {{score}}/{{maxCols}} ({{score/maxCols*100}}%)</div>
      </div>
      <div class="col-4">
        <button v-on:click.prevent="onDone" class="btn btn-primary btn-lg w-100">Done</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Addition",
  props: {
    op: String
  },
  data: function() {
    return {
      maxNumber1: 200,
      from: 'mm',
      to: 'cm',
      maxCols: 20,
      exercises: [],
      score: 0,
      started: false,
      finished: false
    };
  },
  methods: {
    onStart: function() {
      this.exercises = [];
      this.score = 0;
      let minimum = 10;
      let step = 10;

      if(this.from === this.to) {
        alert('From and to must be different');
        this.started = false;
        return;
      }
      this.started = true;


      if(this.from === 'cm' && this.to === 'mm'){
        step = 1;
        minimum = 1;
      }

      for (let i = 0; i < this.maxCols; i++) {
        this.exercises.push({
          a:
            this.rand(minimum, this.maxNumber1, step),
          r: null
        });
      }
    },
    onDone: function() {
      this.finished = true;
      this.score = 0;
      this.exercises.forEach(ex => {
        if (this.convert(ex.a, this.from, this.to) == ex.r) {
          ex.isCorrect = true;
          this.score++;
        } else {
          ex.isCorrect = false;
        }
      });
    },
    convert: function(n, from, to) {
      if(from === 'mm' && to === 'cm') {
        return n / 10;
      } else if(from === 'mm' && to === 'dm') {
        return n / 10 / 10;
      } else if(from === 'mm' && to === 'm') {
        return n / 10 / 10 / 10;
      } else if(from === 'cm' && to === 'dm') {
        return n / 10;
      } else if(from === 'cm' && to === 'm') {
        return n / 10 / 10;
      } else if(from === 'dm' && to === 'm') {
        return n / 10;
      } else if(from === 'm' && to === 'dm') {
        return n * 10;
      } else if(from === 'm' && to === 'cm') {
        return n * 10 *10;
      } else if(from === 'm' && to === 'mm') {
        return n * 10 * 10 * 10;
      } else if(from === 'dm' && to === 'cm') {
        return n * 10;
      } else if(from === 'dm' && to === 'mm') {
        return n * 10 * 10;
      } else if(from === 'cm' && to === 'mm') {
        return n * 10;
      }
    },
    rand: function(min, max, step) {
        var delta,
            range,
            rand;
        if (arguments.length < 2) {
            max = min;
            min = 0;
        }
        if (!step) {
            step = 1;
        }
        delta = max - min;
        range = delta / step;
        rand = Math.random();
        rand *= range;
        rand = Math.floor(rand);
        rand *= step;
        rand += min;
        return rand;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.exercise,
.final-score {
  font-weight: bold;
}

.form-inline .form-control{width: 100%; }

.form-control.is-valid,
.was-validated .form-control:valid {
  padding-right: 0!important;
}

.form-control.is-invalid, 
.was-validated .form-control:invalid{
  padding-right: 0!important;
}

</style>
