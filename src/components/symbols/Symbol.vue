<template>
    <div>
        <template v-if="winnerSymbol && !spinning">
            <component :is="winnerComponent" :symbol="symbol" :winning-amount="winnerAmount"></component>
        </template>
        <div class="slot__symbol-wrapper position-relative"
             v-else
             v-bind:class="slotStyle"
             v-bind:style="{ 'background-image': 'url(' + imageSrc + ')' }"
        >
        </div>
    </div>
</template>
<script>
  import config from '../../services/config';
  import EventBus from '../../services/EventBus';
  import StyleMixin from '../../mixins/StyleMixin';

  export default {
    mixins: [StyleMixin],
    props: {
      symbol: Number,
      reelIndex: Number,
      symbolIndex: Number,
      row: Number
    },
    data() {
      return {
        spinning: false,
        theme: config.theme,
        winnerSymbol: 0,
        winnerAmount: null
      };
    },
    created() {
      EventBus.$on('spinning', (spinning) => {
        this.spinning = spinning;
        if (!spinning) {
          this.setWinnerSymbol();
        }
      });
    },
    methods: {
      setWinnerSymbol() {
        this.winnerSymbol = 0;
        const payouts = this.$store.getters.payouts;
        if (payouts && payouts.length === 0) return null;

        payouts.forEach((payout) => {
          if (payout.formattedMask[this.reelIndex][this.symbolIndex]) {
            this.winnerSymbol = payout.formattedMask[this.reelIndex][this.symbolIndex];
            this.winnerAmount = payout.win;
          }
        });
      }
    },
    computed: {
      imageSrc() {
        return require(`../../assets/themes/${this.theme}/symbols/${this.symbol}.png`);
      },
      winnerComponent() {
        return `winner-${this.winnerSymbol}`;
      },
    },
  };
</script>
