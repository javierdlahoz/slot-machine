<template>
  <div class="control-panel">
    <div class="pure-g">
      <div class="pure-u-1-1">
        <div v-if="meta && meta.outcome">
          <div class="mb-2 flex flex-grow-1 text-center" v-if="meta.payouts.payline">
            payouts Log: {{ meta.payouts.payline }}
          </div>
        </div>
      </div>
    </div>
    <div class="pure-g p-4">
      <div class="pure-u-1-1 text-right">
        <div class="pure-g">
          <div class="pure-u-1-3">

          </div>

          <div class="pure-u-1-3 pure-form input-container">
            <div class="pure-control-group mr-2">
              <label class="mr-2">Bet: €</label>
              <div class="control-btn control-down" @click="decreaseBet">
                <img v-bind:src="downButtonBg">
              </div>
              <input v-bind:disabled="true" type="number" min="0.50" step="0.50" v-model="amount">
              <div class="control-btn control-up">
                <img v-bind:src="upButtonBg" @click="increaseBet">
              </div>
            </div>

<!--            <div class="pure-control-group ml-2">-->
<!--              <label class="mr-2">Auto spin:</label>-->
<!--              <input type="number" class="auto-spin-input" min="0" step="1" v-model="autoSpins">-->
<!--            </div>-->
          </div>

          <div class="pure-u-1-3 buttons-container">
            <div v-bind:disabled="spinning || autoSpinning" class="spin-btn" @click="trigger">
              <img v-bind:src="spinButtonBg">
            </div>

            <div v-if="autoSpinning" v-bind:disabled="spinning" class="mb-2 autospin-btn" @click="stopAutoSpin">
              <img v-bind:src="autoSpinStopButtonBg">
            </div>
            <div v-else v-bind:disabled="spinning" class="mb-2 autospin-btn" @click="triggerAutoSpin(autoSpins)">
              <img v-bind:src="autoSpinButtonBg">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pure-g pr-2 pl-2 balance-panel">
      <div class="pure-u-1-3 text-left">
        <h3 v-if="balance">
          Balance: {{ balance | currency }}
        </h3>
      </div>
      <div class="pure-u-1-3 text-center">
        <h3>
          Bet: {{ meta && meta.bet ? meta.bet : 0 | currency }}
        </h3>
      </div>
      <div class="pure-u-1-3 text-right">
        <h3>
          Win: {{ meta && meta.win ? meta.win : 0 | currency }}
        </h3>
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
      },
      decreaseBet() {
        if (this.amount > config.betStep) {
          this.amount -= config.betStep;
        }
      },
      increaseBet() {
        if ((this.amount + config.betStep) < this.balance) {
          this.amount += config.betStep;
        }
      }
    },
    computed: {
      spinButtonBg() {
        return this.spinning ? require(`../assets/themes/${this.theme}/buttons/spin/animated.gif`)
            : require(`../assets/themes/${this.theme}/buttons/spin/default.png`);
      },
      autoSpinButtonBg() {
        return this.spinning ? require(`../assets/themes/${this.theme}/buttons/autospin/on.png`)
            : require(`../assets/themes/${this.theme}/buttons/autospin/default.png`);
      },
      autoSpinStopButtonBg() {
        return require(`../assets/themes/${this.theme}/buttons/autospin/stop.png`);
      },
      upButtonBg() {
        return require(`../assets/themes/${this.theme}/buttons/up.png`);
      },
      downButtonBg() {
        return require(`../assets/themes/${this.theme}/buttons/down.png`);
      }
    }
  }
</script>
