import { createRouter, createWebHistory } from "vue-router";
// import HelloWorld from "../components/HelloWorld.vue"; // Import your components
import About from "../pages/About.vue"; // Import your components
import Home from "../pages/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
  ], // Add your route definitions here
});

export default router;
