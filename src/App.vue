<template>
  <div class="slot-machine">
    <splash-screen v-if="loading"></splash-screen>
    <slot-board v-else></slot-board>
  </div>
</template>
<style lang="scss">
  @import "styles/app";
</style>
<script>
  import BackedMixin from "./mixins/BackendMixin";
  import config from "./services/config";

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
        if (this.$route.params.token) {
          this.$store.dispatch('setOperatorToken', this.$route.params.token);
        }
        await this.preload();
      },
      getGame() {
        this.loading = true;
        this.retrieveGame(({data}) => {
          // TODO: play with this data when needed
          this.game = data;
          if (!this.game.options) {
            this.game.options = config;
          }
          this.$store.dispatch('setGame', this.game);
          this.playGame();
        }, () => {
          window.location.href = '/';
        });
      },
      playGame() {
        this.loading = true;
        this.retrievePlayerSession(() => {
          // this.retrieveSessionInfo(() => {
            this.loading = false;
          // });
        });
      },
      preload() {
        this.getGame();
      }
    }
  };
</script>
