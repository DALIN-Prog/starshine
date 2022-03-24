import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import HealthSum from "../views/HealthSum.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/HealthSum",
    name: "HealthSum",
    component: HealthSum,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
