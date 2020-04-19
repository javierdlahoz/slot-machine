<template>
  <div class="container board">
    <div class="row mt-4 mb-4 board-container">
      <div class="reel-container col-4" ref="reels" v-for="(reel, index) in reels" v-bind:key="index">
        <slot-reel :reel="reel" :is-winner="hasWinnerSymbol(index)"></slot-reel>
      </div>
    </div>
    <slot-control-panel @triggered="spin" :response="response"></slot-control-panel>
  </div>
</template>
<script>
  import config from "../services/config";
  import BackendServices from "../mixins/BackendMixin";
  import AnimationMixin from "../mixins/AnimationMixin";

  export default {
    mixins: [BackendServices, AnimationMixin],
    props: {
      reelAmount: Number,
      rows: Number,
      symbolsAmount: {
        type: Number,
        default: config.symbols
      }
    },
    data() {
      return {};
    },
    computed: {
      reels() {
        let reels = [];
        for (let i = 0; i < this.reelAmount; i++) {
          reels.push({items: [...Array(this.symbolsAmount).keys()]});
        }
        return reels;
      }
    },
    methods: {
      hasWinnerSymbol(index) {
        return !isNaN(this.payline[index]);
      },
      spin() {
        this.retrieveData(() => {
          this.startAnimatedSpin();
        }, (err) => {
          console.log(err);
        });
      },
    }
  }
</script>