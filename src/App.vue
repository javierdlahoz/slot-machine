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
  import config from "./services/config";

  export default {
    mixins: [BackedMixin],
    data() {
      return {
        loading: true,
        loadingPercentage: 0,
        theme: config.theme
      };
    },
    async created() {
      this.initialize();
    },
    methods: {
      async initialize() {
        if (this.$route.params.token) {
          this.$store.dispatch("setBearerToken", this.$route.params.token);
        }
        await this.preload();
      },
      retrieveInitialData() {
        this.loading = true;
        this.retrieveSessionInfo(() => {
          // this.retrieveSessionInfo(() => {
          this.loading = false;
          // });
        });
      },
      preload() {
        this.retrieveInitialData();
      }
    }
  };
</script>
