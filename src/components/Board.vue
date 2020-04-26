<template>
  <div class="container board">
    <div class="row mt-4 mb-4 board-container" v-bind:class="slotStyle">
      <div class="reel-container col-4" 
        v-bind:class="slotStyle" ref="reels" 
        v-for="(reel, index) in reels" v-bind:key="index">
        <slot-reel :reel="reel" :reel-index="index"></slot-reel>
      </div>
    </div>
    <slot-control-panel @triggered="spin($event)"></slot-control-panel>
  </div>
</template>
<script>
  import config from "../services/config";
  import BackendServices from "../mixins/BackendMixin";
  import AnimationMixin from "../mixins/AnimationMixin";
  import StyleMixin from "../mixins/StyleMixin";

  export default {
    mixins: [BackendServices, AnimationMixin, StyleMixin],
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
      winnerSymbol(index) {
        return isNaN(this.payline[index]) ? null : this.payline[index];
      },
      spin($event) {
        this.retrieveData($event, () => {
          this.startAnimatedSpin();
        }, (err) => {
          console.log(err);
        });
      },
    }
  }
</script>
