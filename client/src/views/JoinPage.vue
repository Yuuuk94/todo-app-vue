<script lang="ts">
import { defineComponent } from "vue";
import { checkEmail, checkPassword } from "../util/checkText";
import { RouterLink } from "vue-router";
import { createAccount } from "../api/users";
import { useMutation } from "vue-query";
import { LoginParams, LoginType } from "../interfaces/user";
import { authState } from "../store/atom";
import { useRecoilState } from "vue-recoil";

export default defineComponent({
  components: {
    RouterLink,
  },
  setup() {
    // api vue query
    const { isLoading, isError, error, isSuccess, mutate } = useMutation(
      (account: LoginParams) => createAccount(account)
    );

    // jwt recoil state
    let [auth, setAuth] = useRecoilState(authState);
    const getAuth = (newAuth) => {
      if (auth !== newAuth) {
        setAuth(newAuth);
        localStorage.setItem("auth", newAuth);
      }
    };
    return { isLoading, isError, error, isSuccess, mutate, getAuth };
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
        this.mutate(
          { email: this.email, password: this.password },
          {
            onSuccess: (data: LoginType) => {
              this.getAuth(data.data.token);
              this.$router.push("/");
            },
          }
        );
      } else {
        this.isEmail = false;
        this.isPassword = false;
        this.isPasswordAgain = false;
      }
    },
  },
});
</script>
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
<style lang=""></style>
