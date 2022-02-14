import NewSecretView from "@/views/NewSecretView.vue";
import SecretView from "@/views/SecretView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "secret",
      component: SecretView,
    },
    {
      path: "/new-secret",
      name: "new-secret",
      component: NewSecretView,
    },
  ],
});

export default router;
