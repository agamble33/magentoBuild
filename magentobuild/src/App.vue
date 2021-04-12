<template>
  <Layout>
    <template v-slot:header>
      <div class="container">
        <h1>My Marvel Hero</h1>
        <p>View your favorite Marvel heros</p>
      </div>
    </template>

    <template v-slot:main class="container">
      <div class="wrapper">
        <!-- pass the favorite heroes you added to FavList for show them on there. -->
        <FavList :favHeroesList="favHeroesList" />
        <!-- 
          :heroes="heroes" it means it needs to pass the heroes from App.vue to Hero.vue 
          @favHeroes="favHeroes" it means it needs to get the favHeroes from Hero.vue to App.vue
        -->
        <Hero :heroes="heroes" @favHeroes="favHeroes" />
      </div>
    </template>

    <template v-slot:footer>
      <Footer>
        <p>Created by Tony Gamble</p>
      </Footer>
    </template>
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
// import Header from "./components/Header.vue";
// import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import FavList from "./components/FavList.vue";
import axios from "axios";
import md5 from "js-md5";

export default {
  name: "App",
  data() {
    return {
      heroes: [],
      // to store the favHeroes from Hero.vue to App.vue
      favHeroesList: [],
    };
  },
  components: {
    Layout,
    // Header,
    // Footer,
    Hero,
    FavList,
  },
  async created() {
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
      });
    // await fetch("api/characters?apikey=6738eb4095728be33d08c2b0661c2555");
  },
  methods: {
    // to store the favHeroes from Hero.vue on favHeroesList in App.vue
    // value means, it's the favHeroes of the this.$emit in Hero.vue
    favHeroes: function(value) {
      this.favHeroesList = value;
    },
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

p {
  margin-top: 0;
  margin-bottom: 1rem;
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
