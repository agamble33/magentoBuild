<template>
  <layout>
    <div>Hello</div>
  </layout>
</template>

<script>
import layout from "./components/layout.vue";

export default {
  name: "App",
  components: {
    layout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 992px;
  margin-left: auto;
  margin-right: auto;
}

.row {
  padding: 15px;
}
</style>
