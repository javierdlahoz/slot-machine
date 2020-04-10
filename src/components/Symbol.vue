<template>
    <div>
        <div class="slot__symbol-wrapper position-relative"
             v-bind:style="{'background-image': 'url(' + imageSrc + ')'}">
        </div>
    </div>
</template>
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