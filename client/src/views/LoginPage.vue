<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import { checkEmail, checkPassword } from "../util/checkText";
import { fetchLogin } from "../api/users";
import { LoginParams, LoginType } from "../interfaces/user";
import { useMutation } from "vue-query";
import { useRecoilState } from "vue-recoil";
import { authState } from "../store/atom";

export default defineComponent({
  components: {
    RouterLink,
  },
  setup() {
    // api vue query
    const { isLoading, isError, error, isSuccess, mutate } = useMutation(
      (account: LoginParams) => fetchLogin(account)
    );

    // jwt recoil state
    let [auth, setAuth] = useRecoilState(authState);
    const getAuth = (newAuth) => {
      if (auth !== newAuth) {
        setAuth(newAuth);
        localStorage.setItem("auth", newAuth);
      }
    };

    return { isLoading, isError, error, isSuccess, mutate, auth, getAuth };
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
      }
    },
  },
});
</script>
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
<style></style>
