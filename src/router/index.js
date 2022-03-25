import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import HealthSum from "../views/HealthSum.vue";
import ResMgmt from "../views/ResMgmt.vue";

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
  },
  {
    path: "/ResMgmt",
    name: "ResMgmt",
    component: ResMgmt,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
