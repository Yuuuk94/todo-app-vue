import { createWebHistory, createRouter } from "vue-router";
import Join from "../views/JoinPage.vue";
import Login from "../views/LoginPage.vue";
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
    component: Join,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
