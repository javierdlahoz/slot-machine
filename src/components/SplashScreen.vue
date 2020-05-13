<template>
  <div class="splash-screen">
    <img v-bind:src="logoSrc">
    <div class="spinner mt-4">
      <div class="fa-3x text-white">
        <font-awesome-icon icon="spinner" pulse/>
      </div>
    </div>
  </div>
</template>
<script>
  import config from '../services/config';

  export default {
    props: {
      loadingPercentage: Number
    },
    data() {
      return {
        game: null,
        theme: config.theme
      };
    },
    computed: {
      logoSrc() {
        return require(`../assets/themes/${this.theme}/logo.png`);
      },
      progressClass() {
        return `width: ${this.loadingPercentage}%`;
      }
    }
  }
</script>