<template>
  <div>
    <div class="slot__symbol-wrapper position-relative"
         v-bind:style="{'background-image': 'url(' + imageSrc + ')'}">
      <template v-if="(winnerSymbol || winnerSymbol === 0) && !spinning">
        <component :is="winnerComponent"></component>
      </template>
    </div>
  </div>
</template>
<script>
  import EventBus from "../../services/EventBus";

  export default {
    props: {
      symbol: Number,
      winnerSymbol: {
        type: Number,
        default: null
      }
    },
    data() {
      return {
        spinning: false
      }
    },
    created() {
      EventBus.$on('spinning', (spinning) => {
        this.spinning = spinning;
      })
    },
    computed: {
      imageSrc() {
        return require(`../../assets/themes/${window.slotConfig.theme}/symbols/${this.symbol}.png`);
      },
      winnerComponent() {
        return `winner-${this.winnerSymbol}`;
      }
    }
  }
</script>