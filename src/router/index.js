import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import AccountCreation from "../views/AccountCreation.vue";
import HealthSum from "../views/HealthSummary.vue";
import HealthSumView from "../views/HealthSummary.vue";
import ResMgmt from "../views/ResidentManagement.vue";
import HistoricalData from "../views/HistoricalData.vue";
import ContactUs from "../views/ContactUs.vue";
import Appointment from "../views/Slots.vue";
import ResidentHealthDataEntry from "../views/ResidentHealthDataEntry.vue";

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
  {
    path: "/HealthSummary",
    name: "HealthSummary",
    component: HealthSum,
  },
  {
    path: "/HealthSummary/:id",
    name: "HealthSummaryView",
    component: HealthSumView,
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
  {
    path: "/AccountCreation",
    name: "AccountCreation",
    component: AccountCreation,
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/appointment",
    name: "Appointment",
    component: Appointment,
  },
  {
    path: "/DataEntry",
    name: "ResidentHealthDataEntry",
    component: ResidentHealthDataEntry,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
