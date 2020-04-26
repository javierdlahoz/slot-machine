<template>
  <div class="slot">
    <div class="slot__window" v-bind:class="slotStyle">
      <div class="slot__wrap">
        <div class="slot__item" 
          v-for="(opt, index) in reel.items" v-bind:key="opt" 
          v-bind:class="slotStyle">
          <slot-symbol :symbol="opt" :reel-index="reelIndex" :symbol-index="index"></slot-symbol>
        </div>
        <div class="slot__offset">
          <div class="slot__item slot__item--copy" v-bind:class="slotStyle">
            <slot-symbol :symbol="reel.items[0]" :reel-index="reelIndex"></slot-symbol>
          </div>
          <div class="slot__item slot__item--copy" v-bind:class="slotStyle">
            <slot-symbol :symbol="reel.items[1]" :reel-index="reelIndex"></slot-symbol>
          </div>
          <div class="slot__item slot__item--copy" v-bind:class="slotStyle">
            <slot-symbol :symbol="reel.items[2]" :reel-index="reelIndex"></slot-symbol>
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
      reelIndex: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        rows: config.rows
      }
    }
  }
</script>
