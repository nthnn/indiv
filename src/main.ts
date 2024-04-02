import "@/assets/glitch.css";
import "98.css/dist/98.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/css/bootstrap-utilities.css";

import App from "./App.vue";
import router from "./router";

import { createApp } from "vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
