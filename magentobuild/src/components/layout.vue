<template>
  <slot name="header"></slot>
  <slot name="main"></slot>
  <slot name="footer"></slot>
</template>

<script>
// import Header from "./Header.vue";
// import Footer from "./Footer.vue";

export default {
  name: "Layout",
  components: {
    // Header,
    // Footer,
  },
};
</script>

<style scoped></style>
