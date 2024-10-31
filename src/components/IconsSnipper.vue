<script>
export default {
    name: 'IconsSnipper',

    props: {
        svg: {
            type: String,
            required: true
        },
        width: {
            type: String,
            required: true
        },
        heigth: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    .icons {
        filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, .7));
    }
</style>


<template>
    <div 
        v-html="svg" 
        :class="`${width} ${heigth} ${color}`"
        class="icons"
        >
    </div>
</template>

