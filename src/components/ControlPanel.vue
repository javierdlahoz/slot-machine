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
      <div class="row">
        <div class="col-md-12">
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <span class="input-group-text">Bet: €</span>
            </div>
            <input type="number" min="0.50" step="0.50" class="form-control" v-model="amount" v-bind:disabled="autoSpinning">
          </div>

          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <span class="input-group-text">Auto spin:</span>
            </div>
            <input type="number" min="0" step="1" class="form-control" v-model="autoSpins">
          </div>

          <button v-bind:disabled="spinning || autoSpinning" class="btn btn-block btn-primary px-4" @click="trigger">
            <font-awesome-icon icon="spinner" v-if="spinning" spin class="mx-2"></font-awesome-icon>
            <span v-else>Spin</span>
          </button>

          <button v-if="autoSpinning" v-bind:disabled="spinning" class="btn btn-block btn-danger px-4" @click="stopAutoSpin">
            <font-awesome-icon icon="spinner" v-if="spinning" spin class="mx-2"></font-awesome-icon>
            <span>({{spinCountdown}}) Stop </span>
          </button>
          <button v-else v-bind:disabled="spinning" class="btn btn-block btn-warning px-4" @click="triggerAutoSpin(autoSpins)">
            <span>Auto Spin</span>
          </button>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import config from "../services/config";
  import EventBus from "../services/EventBus";
  import StyleMixin from "../mixins/StyleMixin";

  export default {
    mixins: [StyleMixin],
    data() {
      return {
        spinning: false,
        amount: 0.50,
        meta: null,
        balance: 0,
        autoSpins: 10,
        spinCountdown: 10,
        autoSpinning: false
      }
    },
    created() {
      this.balance = this.$store.getters.balance;

      EventBus.$on('spinning', (spinning) => {
        this.balance = this.$store.getters.balance;
        this.spinning = spinning;

        if (!spinning) {
          this.meta = this.$store.getters.betResponse;
          this.balance = this.$store.getters.balance;

          if (this.autoSpinning) {
            this.spinCountdown -= 1;
            setTimeout(() => {
              if (this.autoSpinning) {
                this.triggerAutoSpin(this.spinCountdown);
              }
            }, config.autoSpinTimeout);
          }
        }
      });
    },
    methods: {
      trigger() {
        this.$emit('triggered', {
          amount: this.amount
        });
      },
      triggerAutoSpin(autoSpins) {
        this.autoSpinning = true;
        this.spinCountdown = autoSpins;
        this.trigger();

        if (this.spinCountdown < 1) {
          this.autoSpinning = false;
        }
      },
      stopAutoSpin() {
        this.autoSpinning = false;
      }
    }
  }
</script>
