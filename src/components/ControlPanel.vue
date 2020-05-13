<template>
  <div class="pure-g control-panel">
    <div class="pure-u-1-1">
      <div v-if="meta && meta.outcome">
        <div class="mb-2 flex flex-grow-1 text-center" v-if="meta.payouts.payline">
          payouts Log: {{ meta.payouts.payline }}
        </div>
      </div>
    </div>
    <div class="pure-u-1-2">
      <h3 v-if="balance">
        Balance: {{ balance | currency }}
      </h3>
      <h3 v-if="meta && meta.bet">
        Bet: {{ meta.bet | currency }}
      </h3>
      <h3 v-if="meta && meta.win">
        Win: {{ meta.win | currency }}
      </h3>
    </div>
    <div class="pure-u-1-2 text-right">
      <div class="pure-g">
        <div class="pure-u-1-1 pure-form text-right">
          <div class="pure-control-group mb-2">
            <label class="mr-2">Bet: €</label>
            <input type="number" min="0.50" step="0.50" v-model="amount" v-bind:disabled="autoSpinning">
          </div>

          <div class="pure-control-group mb-2">
            <label class="mr-2">Auto spin:</label>
            <input type="number" min="0" step="1" v-model="autoSpins">
          </div>

          <button v-bind:disabled="spinning || autoSpinning" class="pure-button pure-button-primary mb-2" @click="trigger">
            <font-awesome-icon icon="spinner" v-if="spinning" spin class="mr-2"></font-awesome-icon>
            <span v-else>Spin</span>
          </button>

          <button v-if="autoSpinning" v-bind:disabled="spinning" class="pure-button pure-button-primary ml-2 mb-2" @click="stopAutoSpin">
            <font-awesome-icon icon="spinner" v-if="spinning" spin class="mr-2"></font-awesome-icon>
            <span>({{spinCountdown}}) Stop </span>
          </button>
          <button v-else v-bind:disabled="spinning" class="pure-button pure-button-primary ml-2 mb-2" @click="triggerAutoSpin(autoSpins)">
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
