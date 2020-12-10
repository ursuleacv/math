<template>
  <div class="container text-left">
    <!-- fixed-bottom -->
    <h5>History</h5>

    <div class="container">
      <div class="row">
        <div v-if="items.length == 0">No play history yet</div>
        <div
          v-for="(item, id) in items"
          :key="id"
          class="col-2 border border-secondary rounded m-1"
        >
          <b>Score:</b>
          {{item[0].score}}/{{item[0].maxCols}}
          (
          <b>{{item[0].score/item[0].maxCols*100}}%</b>)
          <br>
          {{item[0].date}} ({{item[0].maxNumber1}}x{{item[0].maxNumber2}})
          <br>
          Attempts: {{item.length}}
<!--          {{item[0].timestamp}}-->
        </div>
      </div>
    </div>

    <div class="float-right" v-if="Object.keys(items).length > 0">
      <a href="#" data-toggle="modal" data-target="#clearHistoryModal">Clear</a>
    </div>

    <div class="modal fade" id="clearHistoryModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Clear History</h5>
            <button class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to clear the history?</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              class="btn btn-primary"
              data-dismiss="modal"
              v-on:click.prevent="clearHistory"
            >Clear History</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";

export default {
  name: "PlayHistory",
  props: {
    module: {
      type: String,
      required: true,
      default: ""
    }
  },
  data: function() {
    return {
      history: [], // all history for all modules
      items: [] // local items for module
    };
  },
  mounted: function() {
    this.init();
    this.displayHistory();
  },
  created() {
    bus.$on("onDone", data => {
      this.saveHistory(data);
    });
  },
  methods: {
    init: function() {
      if (localStorage.history) {
        this.history = JSON.parse(localStorage.getItem("history"));
      }
    },
    displayHistory: function() {
      const self = this;
      let items = [];

      items = this.history.filter(function(entry) {
        entry.date = self.formatDate(entry.date);
        return entry.module === self.$props.module;
      });

      let result = items.reduce(function(r, a) {
        r[a.timestamp] = r[a.timestamp] || [];
        r[a.timestamp].push(a);
        return r;
      }, Object.create(null));

      for (const key in result) {
        result[key].reverse();
      }

      this.items = result;

      // eslint-disable-next-line
      // console.log(result);
    },
    saveHistory: function(data) {
      this.history.push(data);
      localStorage.setItem("history", JSON.stringify(this.history));
      this.init();
      this.displayHistory();
    },
    clearHistory: function() {
      this.history = [];
      localStorage.removeItem("history");
      this.displayHistory();
    },
    formatDate: function(date) {
      return Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }).format(new Date(date));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
