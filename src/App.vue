<template>
    <div>
        <slot-wrapper :reel-amount="3" :rows="1">
        </slot-wrapper>
    </div>
</template>
<style scoped lang="scss">
    @import "styles/app.scss";
</style>
<script>
    export default {
        name: 'App'
        // TODO: if needed add logic here
    };
</script>