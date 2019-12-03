<template>
  <div class="container">
    <h1>Multiplication</h1>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label>Max Number 1:</label>
          <input v-model="maxNumber1" type="text" class="form-control" placeholder="Max Number 1" />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label>Max Number 2:</label>
          <input v-model="maxNumber2" type="text" class="form-control" placeholder="Max Number 2" />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label>Max Cols:</label>
          <input v-model="maxCols" type="text" class="form-control" placeholder="Max Cols" />
        </div>
      </div>
      <div class="col-4">
        <div class="form-group">
          <label>Press start to begin</label>
          <button v-on:click.prevent="onMultipStart" class="btn btn-outline-primary w-75">Start</button>
        </div>
      </div>
    </div>

    <form class="form-inline needs-validation" novalidate>
      <div class="row mt-5">
        <div v-for="(exercise, id) in exercises" :key="id" class="col">
          <div class="form-group">
            <p>
              <span class="exercise">{{exercise.a}} {{op}} {{exercise.b}} =</span>
              <input
                v-model="exercise.r"
                type="text"
                class="form-control text-center"
                v-bind:class="{ 'is-valid': exercise.isCorrect, 'is-invalid': exercise.isCorrect==false}"
              />
              <!-- <div v-bind:class="{ 'valid-feedback': exercise.isCorrect }"
                v-if="exercise.isCorrect"
                >Correct!</div>
                <div v-bind:class="{ 'invalid-feedback': !exercise.isCorrect }"
                v-else-if="!exercise.isCorrect"
              >Not Correct!</div>-->
            </p>
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
        <button v-on:click.prevent="onDone" class="btn btn-primary btn-lg w-75">Done</button>
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
    onMultipStart: function() {
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
.form-control.is-valid,
.was-validated .form-control:valid {
  border-color: #28a745;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url(data:image/svg+xml,%3csvg xmlns=http://www.w3.org/2000/svg viewBox=0 0 8… 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z/%3e%3c/svg%3e);
  background-repeat: no-repeat;
  background-position: center right calc(0.375em + 0.1875rem);
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
</style>
