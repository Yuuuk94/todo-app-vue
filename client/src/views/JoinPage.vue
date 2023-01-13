<template>
  <div>
    <h2>Sign Up!</h2>
    <form>
      <label>
        email
        <input v-model="email" type="text" placeholder="email" />
      </label>
      <p v-if="!isEmail">올바른 이메일 형식이 아닙니다.</p>
      <label>
        Password
        <input v-model="password" type="password" placeholder="password" />
      </label>
      <p v-if="!isPassword">
        대소문자, 숫자, 특수문자(@$!%*?&) 8-14자리를 입력해 주세요.
      </p>
      <label>
        Password Again
        <input
          v-model="passwordAgain"
          type="password"
          placeholder="password again"
        />
      </label>
      <p v-if="!isPasswordAgain">입력하신 비밀번호와 일치하지 않습니다.</p>
      <button type="submit" @click="onSignUp">Sign Up</button>
    </form>
    <div>
      <p>
        Already have an account?
        <router-link to="/login">Sign in.</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { checkEmail, checkPassword } from "../utils/checkText";
import { RouterLink } from "vue-router";
import { createAccount } from "@/api/users";

export default defineComponent({
  components: {
    RouterLink,
  },
  data() {
    return {
      email: "",
      password: "",
      passwordAgain: "",
      isEmail: true,
      isPassword: true,
      isPasswordAgain: true,
    };
  },
  methods: {
    onSignUp(e) {
      e.preventDefault();
      if (
        checkEmail.test(this.email) &&
        checkPassword.test(this.password) &&
        this.password === this.passwordAgain
      ) {
        createAccount(this.email, this.password)
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      } else {
        this.isEmail = false;
        this.isPassword = false;
        this.isPasswordAgain = false;
      }
    },
  },
});
</script>
<style lang=""></style>
