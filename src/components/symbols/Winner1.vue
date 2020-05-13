<template>
  <div>
    <div class="slot__symbol-wrapper position-relative"
         v-bind:class="slotStyle"
         v-bind:style="{ 'background-image': 'url(' + imageSrc + ')' }">
      <div class="slot__winning-amount" v-show="showAmount">{{ winningAmount | currency }}</div>
    </div>
  </div>
</template>
<script>
  import config from '../../services/config';
  import StyleMixin from '../../mixins/StyleMixin';

  export default {
    mixins: [StyleMixin],
    props: {
      symbol: Number
    },
    data() {
      return {
        spinning: false,
        theme: config.theme,
        showAmount: true
      };
    },
    mounted() {
      this.animatedAmount();
    },
    methods: {
      animatedAmount() {
        setTimeout(() => {
          this.showAmount = !this.showAmount;
          this.animatedAmount();
        }, 600);
      }
    },
    computed: {
      imageSrc() {
        return require(`../../assets/themes/${this.theme}/animations/win/${this.symbol}.gif`);
      },
      winningAmount() {
        return this.$store.getters.betResponse.win;
      }
    },
  };
</script>
