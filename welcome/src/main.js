import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";

import App from "./App.vue";
import Welcome from "./pages/Welcome.vue";
import SignIn from "./pages/SignIn.vue";

const routes = [
  { path: "/signin", component: SignIn },
  { path: "/", component: Welcome },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
