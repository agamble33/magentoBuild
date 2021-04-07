<template>
  <div class="hero-wrapper">
    <h2>Spidey</h2>
    <div class="hero-content">
      <div class="hero-content-img">
        This is the image
      </div>
      <div class="hero-content-bio">
        <p>This is the bio</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scope>
.hero-content {
}

@media screen and (min-width: 768px) {
  .hero-wrapper {
    width: 70%;
  }
  .hero-content {
    display: flex;
  }

  .hero-content > * {
    margin: 15px;
  }

  .hero-content .hero-content-img {
    max-width: 300px;
  }
  .hero-content .hero-content-img img {
    border-radius: 4px;
    width: 100%;
    max-width: 100%;
  }
}
</style>
