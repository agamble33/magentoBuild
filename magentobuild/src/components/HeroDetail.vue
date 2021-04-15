<template>
  <div>
    <h1>Hero Detail</h1>
    <div>
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-link to="/">Go Home</router-link>
</template>

<script>
export default {
  name: "HeroDetail",
  data() {
    return {
      hero: {},
    };
  },
  created() {
    let heroes = this.$store.state.heroes;
    console.log("heroes", this.$route.params.hero);
    heroes[0].map((item) => {
      if (item.id == this.$route.params.id) {
        this.hero = item;
      }
    });
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
