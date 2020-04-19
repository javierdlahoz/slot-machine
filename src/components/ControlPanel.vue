<template>
  <div class="row">
    <div class="col-md-12">
      <div v-if="meta && meta.outcome">
        <div class="mb-2 flex flex-grow-1 text-center" v-if="meta.payline.length > 0">
          Payline Log: {{ meta.payline }}
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <h5 v-if="meta && meta.balance">
        Balance: {{ meta.balance | currency }}
      </h5>
      <h5 v-if="meta && meta.bet">
        Bet: {{ meta.bet | currency }}
      </h5>
      <h5 v-if="meta && meta.win">
        Win: {{ meta.win | currency }}
      </h5>
    </div>
    <div class="col-md-4 text-right">
      <button v-bind:disabled="spinning" class="btn btn-block btn-primary px-4" @click="trigger">
        <font-awesome-icon icon="spinner" v-if="spinning" spin class="mx-2"></font-awesome-icon>
        <span v-else>Spin</span>
      </button>
    </div>
  </div>
</template>
<script>
  import EventBus from "../services/EventBus";

  export default {
    props: {
      response: Object
    },
    data() {
      return {
        spinning: false
      }
    },
    created() {
      EventBus.$on('spinning', (spinning) => {
        this.spinning = spinning;
      });
    },
    methods: {
      trigger() {
        this.$emit('triggered');
      }
    },
    computed: {
      meta() {
        return this.response.data;
      }
    }
  }
</script>