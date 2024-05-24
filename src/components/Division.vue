<template>
    <div class="container">
      <h2>Division</h2>
      <div class="row justify-content-center">
        <div class="col-12 col-md-auto">
          <div class="form-group">
            <label>Max Dividend:</label>
            <input v-model.trim="maxDividend" type="text" class="form-control" placeholder="Max Dividend" />
          </div>
        </div>
        <div class="col-12 col-md-auto">
          <div class="form-group">
            <label>Max Divisor:</label>
            <input v-model.trim="maxDivisor" type="text" class="form-control" placeholder="Max Divisor" />
          </div>
        </div>
        <div class="col-12 col-md-auto">
          <div class="form-group">
            <label>Exercises:</label>
            <input v-model.trim="maxCols" type="text" class="form-control" placeholder="Number of Exercises" />
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
                  <span class="exercise">{{exercise.dividend}} / {{exercise.divisor}} =</span>
                  <input
                    v-model="exercise.answer"
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
  import { bus } from "../main";
  
  export default {
    name: "Division",
    data: function() {
      return {
        maxDividend: 100,
        maxDivisor: 10,
        maxCols: 20,
        exercises: [],
        score: 0,
        started: false,
        finished: false,
        timestamp: Date.now(),
      };
    },
    methods: {
      onStart: function() {
        this.started = true;
        this.exercises = [];
        this.score = 0;
        this.timestamp = Date.now();
        const minimum = 2;
        for (let i = 0; i < this.maxCols; i++) {
          let divisor = Math.floor(Math.random() * (this.maxDivisor - minimum + 1)) + minimum;
          let quotient = Math.floor(Math.random() * (this.maxDividend / divisor - minimum + 1)) + minimum;
          let dividend = divisor * quotient;
          this.exercises.push({
            dividend: dividend,
            divisor: divisor,
            answer: null
          });
        }
      },
      onDone: function() {
        this.finished = true;
        this.score = 0;
        this.exercises.forEach(ex => {
          if (ex.dividend / ex.divisor == ex.answer) {
            ex.isCorrect = true;
            this.score++;
          } else {
            ex.isCorrect = false;
          }
        });
  
        bus.$emit("onDone", {
          module: "division",
          date: new Date(),
          exercises: this.exercises,
          score: this.score,
          maxCols: this.maxCols,
          maxDividend: this.maxDividend,
          maxDivisor: this.maxDivisor,
          timestamp: this.timestamp,
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
  
  .form-inline .form-control {
    width: 100%;
  }
  
  .form-control.is-valid,
  .was-validated .form-control:valid {
    padding-right: 0 !important;
  }
  
  .form-control.is-invalid,
  .was-validated .form-control:invalid {
    padding-right: 0 !important;
  }
  </style>
  