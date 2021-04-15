<template>
  <div>
    <h2>Fav Heros</h2>
    <ul>
      <li v-for="hero in favHeroes" :key="hero.id">
        <router-link
          :to="{ name: 'herodetail', params: { id: hero.id } }"
          exact
          >{{ hero.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FavList",
  //   Iget the favHeroesList as props from App.vue(Parent Component) to FavList.vue(Child Component)
  // props: ["favHeroesList"],
  data() {
    return {
      favHeroes: this.$store.state.favHeroes,
    };
  },
};
</script>

<style>
ul {
  padding-left: 16px;
}
</style>
