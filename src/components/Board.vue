<template>
    <div class="slot-machine" v-bind:style="{ 'background-image': 'url(' + bgSrc + ')' }">
        <div class="container board">
            <h2 class="text-center"> {{ $store.getters.game.name }} </h2>
            <div class="pure-g mt-4 mb-4 board-container" v-bind:class="slotStyle"
                 v-bind:style="{'max-height': `${boardHeight}px`}">
                <div class="reel-container"
                     v-bind:style="{height: `${reelHeight}px`}"
                     v-bind:class="reelsColClass"
                     ref="reels"
                     v-for="(reel, index) in reels" v-bind:key="index">
                    <slot-reel :reel="reel" :reel-index="index"></slot-reel>
                </div>
            </div>
        </div>
        <slot-control-panel @triggered="spin($event)"></slot-control-panel>
    </div>
</template>
<script>
  import BackendServices from "../mixins/BackendMixin";
  import AnimationMixin from "../mixins/AnimationMixin";
  import StyleMixin from "../mixins/StyleMixin";
  import config from "../services/config";

  export default {
    mixins: [BackendServices, AnimationMixin, StyleMixin],
    data() {
      return {
        reelAmount: 0,
        rows: 0,
        symbolsAmount: 0,
        theme: config.theme
      };
    },
    async created() {
      this.reelAmount = this.$store.getters.game.options.cols;
      this.rows = this.$store.getters.game.options.rows;
      this.symbolsAmount = this.$store.getters.game.options.symbols;
    },
    computed: {
      reels() {
        let reels = [];
        for (let i = 0; i < this.reelAmount; i++) {
          reels.push({items: [...Array(this.symbolsAmount).keys()]});
        }
        return reels;
      },
      reelsColClass() {
        const classesDic = {
          3: 'pure-u-1-3',
          4: 'pure-u-1-4',
          5: 'pure-u-1-5'
        };

        return `${classesDic[this.reelAmount]} ${this.slotStyle}`;
      },
      boardHeight() {
        return this.slotWindowHeight + 20;
      },
      bgSrc() {
        return require(`../assets/themes/${this.theme}/background/bg.png`);
      }
    },
    methods: {
      winnerSymbol(index) {
        return isNaN(this.payline[index]) ? null : this.payline[index];
      },
      spin($event) {
        this.$store.dispatch('bet', $event.amount);

        this.retrieveSpinData($event, () => {
          this.startAnimatedSpin();
        }, (err) => {
          console.log(err);
        });
      },
    }
  }
</script>
