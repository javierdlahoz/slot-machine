<template>
  <div class="row">
    <div class="col-md-12">
      <div v-if="meta && meta.outcome">
        <div class="mb-2 flex flex-grow-1 text-center" v-if="meta.payouts.payline">
          payouts Log: {{ meta.payouts.payline }}
        </div>
      </div>
    </div>
    <div class="col-md-8 d-flex flex-column justify-content-center">
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
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <span class="input-group-text">Bet: €</span>
        </div>
        <input type="number" min="0.50" step="0.50" class="form-control" v-model="amount">
      </div>
      
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
    data() {
      return {
        spinning: false,
        amount: 0.50
      }
    },
    created() {
      EventBus.$on('spinning', (spinning) => {
        this.spinning = spinning;
      });
    },
    methods: {
      trigger() {
        this.$emit('triggered', {
          amount: this.amount
        });
      }
    },
    computed: {
      meta() {
        return this.$store.getters.betResponse;
      }
    }
  }
</script>