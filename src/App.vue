<template>
  <div>
    <splash-screen v-if="loading"></splash-screen>
    <slot-board v-else></slot-board>
  </div>
</template>
<style lang="scss">
  @import "styles/app";
</style>
<script>
  import BackedMixin from "./mixins/BackendMixin";

  export default {
    mixins: [BackedMixin],
    data() {
      return {
        loading: true,
        loadingPercentage: 0
      }
    },
    async created() {
      this.initialize();
    },
    methods: {
      async initialize() {
        await this.preload();
      },
      getGame() {
        this.loading = true;
        this.retrieveGame(({data}) => {
          // TODO: play with this data when needed
          this.game = data;
          this.$store.dispatch('setGame', this.game);
          this.loading = false;
        });
      },
      preload() {
        this.getGame();
      }
    }
  };
</script>