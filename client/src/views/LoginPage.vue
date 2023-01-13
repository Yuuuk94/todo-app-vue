<template>
  <div>
    <h2>Login!</h2>
    <form>
      <label>
        email
        <input v-model="email" type="text" placeholder="email" />
      </label>
      <p v-if="!isEmail">올바른 이메일 형식이 아닙니다.</p>
      <label>
        Password
        <input v-model="password" type="password" placeholder="password" />
        <p v-if="!isPassword">
          대소문자, 숫자, 특수문자(@$!%*?&) 8-14자리를 입력해 주세요.
        </p>
      </label>
      <button type="submit" @click="onLogin">Login</button>
    </form>
    <div>
      <p>
        New to the Todo App with Vue?
        <router-link to="/join">Create an account.</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { checkEmail, checkPassword } from "../util/checkText";
import { getLogin } from "@/api/users";

export default defineComponent({
  components: {
    RouterLink,
  },
  data() {
    return {
      email: "",
      password: "",
      isEmail: true,
      isPassword: true,
    };
  },
  methods: {
    onLogin(e) {
      e.preventDefault();
      if (checkEmail.test(this.email) && checkPassword.test(this.password)) {
        getLogin(this.email, this.password)
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      } else {
        this.isEmail = false;
        this.isPassword = false;
      }
    },
  },
});
</script>
<style></style>
