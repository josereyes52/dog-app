<template>
  <Board/>
</template>

<script>
import Board from './components/TableBoard.vue'

export default {
  name: 'App',
  components: {
    Board
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: inherit;
  background-image:  radial-gradient(#2aff42 0.9500000000000001px, transparent 0.9500000000000001px), radial-gradient(#2aff42 0.9500000000000001px, #37594c 0.9500000000000001px);
  background-size: 38px 38px;
  background-position: 0 0,19px 19px;
}

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
