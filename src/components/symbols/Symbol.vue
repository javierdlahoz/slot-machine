<template>
    <div>
        <div class="slot__symbol-wrapper position-relative"
             v-bind:class="slotStyle"
             v-bind:style="{ 'background-image': 'url(' + imageSrc + ')' }"
        >
            <template v-if="winnerSymbol && !spinning">
                <component :is="winnerComponent"></component>
            </template>
        </div>
    </div>
</template>
<script>
  import config from '../../services/config';
  import EventBus from '../../services/EventBus';
  import StyleMixin from '../../mixins/StyleMixin';
  import Utils from '../../services/utils';

  export default {
    mixins: [StyleMixin],
    props: {
      symbol: Number,
      reelIndex: Number,
      symbolIndex: Number,
      row: Number,
    },
    data() {
      return {
        spinning: false,
        theme: config.theme
      };
    },
    created() {
      EventBus.$on('spinning', (spinning) => {
        this.spinning = spinning;
      });
    },
    computed: {
      imageSrc() {
        return require(`../../assets/themes/${this.theme}/symbols/${this.symbol}.png`);
      },
      winnerSymbol() {
        if (!this.$store.getters.betResponse) return null;
        const payouts = this.$store.getters.betResponse.payouts;
        let winnerSymbol = 0;

        payouts.forEach((payout) => {
          // TODO: need to integrate with win value
          // const win = payout.win;

          if (payout.mask) {
            const masks = Utils.chunk(
                payout.mask,
                this.$store.getters.game.options.cols
            );
            if (masks[this.row] && masks[this.row][this.reelIndex]) {
              winnerSymbol = masks[this.row][this.reelIndex];
              return;
            }
          }
        });

        return winnerSymbol;
      },
      winnerComponent() {
        return `winner-${this.winnerSymbol}`;
      },
    },
  };
</script>
