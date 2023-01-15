import { atom } from "vue-recoil";

export const authState = atom({
  key: "auth",
  default: "",
});

// function setDefaultAuth() {
//   const jwt = localStorage.getItem("auth");
//   if (jwt) {
//     return jwt;
//   }
//   return "";
// }
