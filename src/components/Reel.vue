<template>
  <div class="slot">
    <div class="slot__window" v-bind:class="slotStyle"
      v-bind:style="{'max-height': `${slotReelWindowHeight}px`, 'background-image': `url(${reelBackgroundUrl})`}">
      <div class="slot__wrap">
        <div class="slot__item"
          v-for="(opt, index) in reel.items" v-bind:key="index"
          v-bind:class="slotStyle">
          <slot-symbol :row="0" :symbol="opt" :reel-index="reelIndex" :symbol-index="index"></slot-symbol>
        </div>
        <div class="slot__offset">
          <div class="slot__item slot__item--copy"
            v-for="i in rowsRange" v-bind:key="i"
            v-bind:class="slotStyle">
            <slot-symbol :row="i" :symbol="reel.items[i]" :reel-index="reelIndex"></slot-symbol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import StyleMixin from "../mixins/StyleMixin";
  import config from "../services/config";

  export default {
    mixins: [StyleMixin],
    props: {
      reel: Object,
      reelIndex: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        rows: 1,
        theme: config.theme
      }
    },
    async created() {
      this.rows = this.$store.getters.game.options.rows;
    },
    computed: {
      rowsRange() {
        let list = [];
        for (let i = 0; i < this.rows; i++) {
            list.push(i);
        }
        return list;
      },
      slotReelWindowHeight() {
        return this.slotWindowHeight + 20;
      },
      reelBackgroundUrl() {
        return require(`../assets/themes/${this.theme}/background/reel.png`);
      }
    }
  }
</script>
