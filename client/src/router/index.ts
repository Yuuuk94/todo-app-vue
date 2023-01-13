import { createWebHistory, createRouter } from "vue-router";
import Join from "../views/JoinPage.vue";
import Login from "../views/LoginPage.vue";
import TodoList from "../views/TodoList.vue";

const routes = [
  {
    path: "/",
    name: "todo-list",
    component: TodoList,
    meta: { authRequired: true },
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

router.beforeEach(function (to, from, next) {
  console.log("라우딩 대기");
  const jwt = localStorage.getItem("todo-jwt");
  console.log(jwt);
  const isAuth = false;
  // if (
  //   to.matched.some(function (routeInfo) {
  //     console.log(routeInfo);
  //     return routeInfo.meta.authRequired;
  //   })
  // ) {
  //   // 인증이 필요한 페이지일 경우 인증 체크
  //   if (jwt) {
  //     next(); // 페이지 전환
  //   } else {
  //     next("/login"); // 페이지 전환

  //     // alert("로그인 필요");
  //   }
  // } else {
  //   next(); // 페이지 전환
  // }
});

export default router;
