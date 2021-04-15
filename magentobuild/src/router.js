import { createWebHistory, createRouter } from "vue-router";
import HeroDetail from "./components/HeroDetail";
import Home from "./components/Home";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/hero/:id",
    name: "herodetail",
    component: HeroDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
