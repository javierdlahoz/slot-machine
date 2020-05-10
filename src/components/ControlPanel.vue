<template>
  <div class="row control-panel" v-bind:class="slotStyle">
    <div class="col-md-12">
      <div v-if="meta && meta.outcome">
        <div class="mb-2 flex flex-grow-1 text-center" v-if="meta.payouts.payline">
          payouts Log: {{ meta.payouts.payline }}
        </div>
      </div>
    </div>
    <div class="col-md-6 d-flex flex-column justify-content-center">
      <h5 v-if="balance">
        Balance: {{ balance | currency }}
      </h5>
      <h5 v-if="meta && meta.bet">
        Bet: {{ meta.bet | currency }}
      </h5>
      <h5 v-if="meta && meta.win">
        Win: {{ meta.win | currency }}
      </h5>
    </div>
    <div class="col-md-6 text-right">
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
  import StyleMixin from "../mixins/StyleMixin";

  export default {
    mixins: [StyleMixin],
    data() {
      return {
        spinning: false,
        amount: 0.50,
        meta: null,
        balance: 0
      }
    },
    created() {
      this.balance = this.$store.getters.balance;

      EventBus.$on('spinning', (spinning) => {
        this.spinning = spinning;
        if (!spinning) {
          this.meta = this.$store.getters.betResponse;
          this.balance = this.$store.getters.balance;
        }
      });
    },
    methods: {
      trigger() {
        this.$emit('triggered', {
          amount: this.amount
        });
      }
    }
  }
</script>
