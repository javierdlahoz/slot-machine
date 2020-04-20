<template>
  <div class="slot">
    <div class="slot__window" v-bind:class="slotStyle">
      <div class="slot__wrap">
        <div class="slot__item" v-for="opt in reel.items" v-bind:key="opt" v-bind:class="slotStyle">
          <slot-symbol :symbol="opt" :winner-symbol="winnerSymbol"></slot-symbol>
        </div>
        <div class="slot__offset">
          <div class="slot__item slot__item--copy" v-bind:class="slotStyle">
            <slot-symbol :symbol="reel.items[0]" :winner-symbol="winnerSymbol"></slot-symbol>
          </div>
          <div class="slot__item slot__item--copy" v-bind:class="slotStyle">
            <slot-symbol :symbol="reel.items[1]" :winner-symbol="winnerSymbol"></slot-symbol>
          </div>
          <div class="slot__item slot__item--copy" v-bind:class="slotStyle">
            <slot-symbol :symbol="reel.items[2]" :winner-symbol="winnerSymbol"></slot-symbol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import config from "../services/config";
  import StyleMixin from "../mixins/StyleMixin";

  export default {
    mixins: [StyleMixin],
    props: {
      reel: Object,
      winnerSymbol: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        rows: config.rows
      }
    }
  }
</script>
