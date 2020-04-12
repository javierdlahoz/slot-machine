<template>
    <div class="splash-screen">
        <img v-bind:src="logoSrc">
        <div class="progress mt-4">
            <div class="progress-bar" v-bind:style="progressClass"
                 role="progressbar" v-bind:aria-valuenow="loadingPercentage"
                 aria-valuemin="0" aria-valuemax="100"></div>
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