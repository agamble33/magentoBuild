import { createApp } from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
// import * as VueRouter from "vue-router";
import store from "./store/store";
import router from "./router";

// const NotFoundComponent = { template: "<p>Page Not found</p>" };

// const SimpleRouter = {
//   data: () => ({
//     currentRoute: window.location.pathname,
//   }),
//   computed: {
//     CurrentComponent() {
//       return router[this.currentRoute] || NotFoundComponent;
//     },
//   },
//   render() {
//     return h(this.CurrentComponent);
//   },
//   created() {
//     window.addEventListener("popstate", () => {
//       this.currentRoute = window.location.pathname;
//     });
//   },
// };

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

// pp.use(VueRouter);
App.use(VueAxios);
