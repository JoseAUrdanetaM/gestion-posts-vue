import { createRouter, createWebHistory } from "vue-router";
import AdminPanel from "../views/AdminPanel.vue";
import Blog from "../views/Blog.vue";
import BlogEntry from "../views/BlogEntry.vue";
import UserPanel from "../views/UserPanel.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", component: Blog },
  { path: "/admin-panel", component: AdminPanel },
  { path: "/blog/:id", component: BlogEntry },
  { path: "/user-panel", component: UserPanel },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
