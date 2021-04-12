<template>
  <div>
    <h2>Fav Heros</h2>
    <ul>
      <li v-for="hero in favHeroesList" :key="hero.id">
        {{ hero.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FavList",
  //   Iget the favHeroesList as props from App.vue(Parent Component) to FavList.vue(Child Component)
  props: ["favHeroesList"],
};
</script>

<style>
ul {
  padding-left: 16px;
}
</style>
