import "bootstrap/dist/css/bootstrap.css";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";
import router from "./router/index.js";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(router).use(VueChartkick).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
