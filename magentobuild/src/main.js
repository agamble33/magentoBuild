import { createApp } from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";

createApp(App).mount("#app");
App.use(VueAxios);
