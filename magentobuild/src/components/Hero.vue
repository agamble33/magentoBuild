<template>
  <div class="hero-wrapper">
    <div class="hero-content">
      <div class="heroes-list">
        <div class="hero-name">
          <h2>{{ hero.name }}</h2>
        </div>
        <div class="heroes">
          <div class="hero-image">
            <img
              class="hero-image-size"
              :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
            />
          </div>
          <div class="hero-bio">
            <h3>Character Bio</h3>
            <p>
              {{ hero.description ? hero.description : "Mystery character" }}
            </p>
            <div style="margin-top: 2rem;">
              <!-- To add the hero whenever I click the "Add character to favorites", defined the addHeroToFavList function with hero information as a parameter -->
              <button @click="addHeroToFavList(hero)">
                Add character to favorites
              </button>
              <button @click="randomHeroDetail(hero.id)">Random</button>
            </div>
          </div>
          <!-- <div class="favorite-hero">
            <h3>My favorite characters</h3>
            <select>
              <option v-for="hero in heroes" :key="hero.id">{{
                hero.name
              }}</option>
            </select>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: ["heroes", "hero"],
  data() {
    return {
      // to get the heroes added, I need to define the favHeroes array
      favHeroes: this.$store.state.favHeroes,
    };
  },
  methods: {
    addHeroToFavList: function(hero) {
      console.log("hero", hero);
      // if I clicked the same hero twice, the hero should be added one time, not double.
      // before add the hero to the favHeroes, I need to check the favHeroes, which it is existed or not in favHeroes
      if (this.favHeroes.includes(hero) === false) {
        // if the added hero is new one, it will be added to  favHeroes
        // this.favHeroes.push(hero);
        this.$store.state.favHeroes.push(hero);
      } else {
        // else, it means it's already added to favHeroes.
        console.log("This Hero is already added to your favorite list");
      }
      // to show the favHeroes on 'Fav Heros', I needed to pass the favHeroes to parent component(App.vue)
      // in this case, we use the this.$emit
      // this.$emit("favHeroes", this.favHeroes);
    },
    randomHeroDetail: function(hero) {
      this.$emit("randomHero", hero);
    },
  },
};
</script>

<style scope>
.hero-content {
  display: block;
}

.heroes-list {
  margin: 20px 5px;
  box-shadow: 2px 2px 2px 2px #888888;
  border-radius: 5px;
  padding: 30px 20px;
}

.heroes {
  display: flex;
  width: 100%;
}

.hero-image-size {
  width: 200px;
  border-radius: 10px;
}

.hero-bio h3 {
  margin-top: 0px;
}

.favorite-hero h3 {
  margin-top: 0px;
}

@media screen and (min-width: 768px) {
  .hero-image {
    width: 50%;
    max-width: 250px;
  }

  .hero-bio {
    width: 50%;
    min-height: 200px;
  }

  .hero-wrapper {
    margin: 0 -15px;
    padding: 15px;
  }
  .hero-content {
  }

  .hero-content > * {
  }

  .hero-content .hero-content-img {
    width: 250px;
    padding-right: 15px;
  }

  .hero-content .hero-content-img img {
    border-radius: 4px;
    width: 100%;
    max-width: 100%;
  }
}
</style>
