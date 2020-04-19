<template>
  <div class="slot">
    <div class="slot__window">
      <div class="slot__wrap">
        <div class="slot__item" v-for="opt in reel.items" v-bind:key="opt">
          <slot-symbol :symbol="opt" :is-winner="isWinner"></slot-symbol>
        </div>
        <div class="slot__offset">
          <div class="slot__item slot__item--copy">
            <slot-symbol :symbol="reel.items[0]" :is-winner="isWinner"></slot-symbol>
          </div>
          <div class="slot__item slot__item--copy">
            <slot-symbol :symbol="reel.items[1]" :is-winner="isWinner"></slot-symbol>
          </div>
          <div class="slot__item slot__item--copy">
            <slot-symbol :symbol="reel.items[2]" :is-winner="isWinner"></slot-symbol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import config from "../services/config";

  export default {
    props: {
      reel: Object,
      isWinner: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        rows: config.rows
      }
    }
  }
</script>