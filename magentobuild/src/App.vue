<template>
  <layout>
    <div class="container">
      <div class="wrapper">
        <Hero />
        <FavList />
      </div>
    </div>
  </layout>
</template>

<script>
import layout from "./components/layout.vue";
import Hero from "./components/Hero.vue";
import FavList from "./components/FavList.vue";

export default {
  name: "App",
  components: {
    layout,
    Hero,
    FavList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 992px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
