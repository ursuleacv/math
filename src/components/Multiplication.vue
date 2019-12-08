<template>
  <div class="container">
    <h1>Multiplication</h1>
    <div class="row">
      <div class="col-12 col-md-auto">
        <div class="form-group">
          <label>Max Number 1:</label>
          <input v-model="maxNumber1" type="text" class="form-control" placeholder="Max Number 1" />
        </div>
      </div>
      <div class="col-12 col-md-auto">
        <div class="form-group">
          <label>Max Number 2:</label>
          <input v-model="maxNumber2" type="text" class="form-control" placeholder="Max Number 2" />
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
              <span class="exercise">{{exercise.a}} {{op}} {{exercise.b}} =</span>
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
  name: "Multiplication",
  props: {
    op: String
  },
  data: function() {
    return {
      maxNumber1: 5,
      maxNumber2: 12,
      maxCols: 20,
      exercises: [],
      score: 0,
      started: false,
      finished: false
    };
  },
  methods: {
    onStart: function() {
      this.started = true;
      this.exercises = [];
      this.score = 0;
      const minimum = 2;
      for (let i = 0; i < this.maxCols; i++) {
        this.exercises.push({
          a:
            Math.floor(Math.random() * (this.maxNumber1 - minimum + 1)) +
            minimum,
          b:
            Math.floor(Math.random() * (this.maxNumber2 - minimum + 1)) +
            minimum,
          // a: Math.floor(Math.random() * Math.floor(this.maxNumber1)),
          // b: Math.floor(Math.random() * Math.floor(this.maxNumber2)),
          r: null
        });
      }
    },
    onDone: function() {
      this.finished = true;
      this.score = 0;
      this.exercises.forEach(ex => {
        if (ex.a * ex.b == ex.r) {
          ex.isCorrect = true;
          this.score++;
        } else {
          ex.isCorrect = false;
        }
      });
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
