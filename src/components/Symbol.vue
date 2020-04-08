<template>
    <div>
        <div class="slot__symbol-wrapper">
            <img v-bind:src="imageSrc" />
        </div>
    </div>
</template>
<style scoped lang="scss">
    @import "../styles/components/symbol.scss";
</style>
<script>
    export default {
        props: {
            symbol: Number
        },
        computed: {
            imageSrc() {
                return require(`../assets/themes/${window.slotConfig.theme}/${this.symbol}.png`);
            }
        }
    }
</script>