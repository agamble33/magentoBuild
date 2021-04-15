<template class="container">
  <div class="wrapper">
    <FavList />
    <Hero :hero="hero" @randomHero="randomHero" />
  </div>
</template>
<script>
import Hero from "./Hero.vue";
import FavList from "./FavList.vue";
import axios from "axios";
import md5 from "js-md5";

export default {
  name: "Home",
  data() {
    return {
      heroes: [],
      hero: {},
    };
  },
  components: {
    Hero,
    FavList,
  },
  async created() {
    this.$store.state.favHeroes = [];
    this.$store.state.heroes = [];
    this.hero = {};
    const hash = md5.create();
    const ts = Number(new Date());
    // ALERT private key should not be exposed //
    const private_key = "ee666ce5c2be66981fd112d180dee9e4f6ffb13e";
    const public_key = "6738eb4095728be33d08c2b0661c2555";
    hash.update(ts + private_key + public_key);
    console.log("hash", hash);
    await axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=6738eb4095728be33d08c2b0661c2555&hash=${hash.hex()}`
      )
      .then((res) => {
        this.heroes = res.data.data.results;
        this.$store.state.heroes.push(this.heroes);
        this.hero = this.heroes[0];
      });
    // await fetch("api/characters?apikey=6738eb4095728be33d08c2b0661c2555");
  },
  methods: {
    // to store the favHeroes from Hero.vue on favHeroesList in App.vue
    // value means, it's the favHeroes of the this.$emit in Hero.vue
    // favHeroes: function(value) {
    //   this.favHeroesList = value;

    //  Project Requirements:
    // 1. At minimum, the following information should be displayed:
    // a. Character’s name
    // b. Character’s image
    // c. Character’s Bio
    // 2. A “random” button that will call the next random character
    // 3. A “favorite” button that will save the character as a favorite to the state management
    // system of your choice (ie Redux or Vuex)
    // 4. A list of the user’s favorite characters, displayed as links that will re-render the page with
    // that character’s info upon click.
    // },

    randomHero: function(value) {
      let idx = Math.floor(Math.random() * 19) + 1;
      if (value == this.heroes[idx]) {
        idx = Math.floor(Math.random() * 19) + 1;
      }
      this.hero = this.heroes[idx];
    },
  },
};
</script>
