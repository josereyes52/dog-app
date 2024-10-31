<script>
export default {
    name: 'MainTitle',
    props: {
        range: {
            type: Number,
            required: true
        },
        CustomClass: {
            type: String,
            required: true
        },
        colors: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    .title {
        box-shadow: 0px 2px 0 1px rgb(31 48 48), inset 0px 20px 6px 0px rgb(255 255 255 / 16%);
    }

    .title > div {
        border-color: transparent;
        border-radius: 2px;
        bottom: 0;
        height: 10px;
        border-width: 1px;
        border-color: rgb(93, 93, 93);
        background-position: 42% 100%;
        position: absolute;
        width: 88%;
    }
</style>

<template>
    <!-- loop through the range prop and display the numbers -->
        <div class="relative font-mono" :class="CustomClass" v-for="i in 8" :key="i">
            {{ i }}
            <div class="border-b-2" :class="'bg-c' + i"></div>
        </div>
</template>
