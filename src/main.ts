import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";

// // Vuetify
// import "vuetify/styles";
// import { createVuetify } from "vuetify";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";

// const vuetify = createVuetify({
//   components,
//   directives,
// });

const app = createApp(App)
  // .use(vuetify)
  .use(router)
  .use(store);
app.mount("#app");
