<template>
  <div>
    <div class="slot__symbol-wrapper position-relative slot__winning-symbol"
         v-bind:class="slotStyle">
      <img v-bind:src="imageSrc" width="100%">
      <div class="slot__winning-amount">{{ winningAmount | currency }}</div>
    </div>
  </div>
</template>
<script>
  import config from '../../services/config';
  import StyleMixin from '../../mixins/StyleMixin';

  export default {
    mixins: [StyleMixin],
    props: {
      symbol: Number,
      winningAmount: Number
    },
    data() {
      return {
        spinning: false,
        theme: config.theme,
        showAmount: true
      };
    },
    computed: {
      imageSrc() {
        return require(`../../assets/themes/${this.theme}/animations/win/${this.symbol}.gif`);
      }
    },
  };
</script>
