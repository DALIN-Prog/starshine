import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import HealthSum from "../views/HealthSummary.vue";
import ResMgmt from "../views/ResidentManagement.vue";
import HistoricalData from "../views/HistoricalData.vue";

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
    path: "/HealthSummary",
    name: "HealthSummary",
    component: HealthSum,
  },
  {
    path: "/ResidentManagement",
    name: "ResidentManagement",
    component: ResMgmt,
  },
  {
    path: "/HistoricalData",
    name: "HistoricalData",
    component: HistoricalData,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
