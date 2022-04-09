import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Login from "../views/Login.vue";
import AccountCreation from "../views/AccountCreation.vue";
import HealthSummary from "../views/HealthSummary.vue";
import ResManagement from "../views/ResidentManagement.vue";
import HistoricalData from "../views/HistoricalData.vue";
import ContactUs from "../views/ContactUs.vue";
import Appointment from "../views/Slots.vue";
import AdminAppointment from "../views/AdminSlots.vue";
import ResidentHealthDataEntry from "../views/ResidentHealthDataEntry.vue";
import EditData from "../views/EditData.vue";

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
    path: "/HealthSummary/:id",
    name: "HealthSummary",
    component: HealthSummary,
  },
  {
    path: "/ResidentManagement",
    name: "ResidentManagement",
    component: ResManagement,
  },
  {
    path: "/HistoricalData/:id",
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
    path: "/DataEntry/:id",
    name: "ResidentHealthDataEntry",
    component: ResidentHealthDataEntry,
  },
  {
    path: "/AdminSlots",
    name: "AdminAppointmentPage",
    component: AdminAppointment,
  },
  {
    path: "/EditData/:id",
    name: "EditData",
    component: EditData,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
