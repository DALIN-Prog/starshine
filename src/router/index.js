import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import AccountCreation from "../views/AccountCreation.vue";

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
    path: "/AccountCreation",
    name: "AccountCreation",
    component: AccountCreation,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
