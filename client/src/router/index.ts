import { createWebHistory, createRouter } from "vue-router";
import JoinPage from "../views/JoinPage.vue";
import LoginPageVue from "../views/LoginPage.vue";
import TodoList from "../views/TodoList.vue";

const routes = [
  {
    path: "/",
    name: "todo-list",
    component: TodoList,
  },
  {
    path: "/join",
    name: "join",
    component: JoinPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPageVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
