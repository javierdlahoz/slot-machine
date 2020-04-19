<template>
  <div class="splash-screen">
    <img v-bind:src="logoSrc">
    <div class="spinner mt-4">
      <div class="fa-3x text-white">
        <font-awesome-icon icon="spinner" pulse/>
      </div>
      <!--            <div class="progress-bar" v-bind:style="progressClass"-->
      <!--                 role="progressbar" v-bind:aria-valuenow="loadingPercentage"-->
      <!--                 aria-valuemin="0" aria-valuemax="100"></div>-->
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      loadingPercentage: Number
    },
    computed: {
      logoSrc() {
        return require(`../assets/themes/${window.slotConfig.theme}/logo.png`);
      },
      progressClass() {
        return `width: ${this.loadingPercentage}%`;
      }
    }
  }
</script>