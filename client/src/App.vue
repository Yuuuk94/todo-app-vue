<template>
  <div>
    <header>
      <h1>Welcome to the Todo App with Vue!</h1>
    </header>
    <router-view />
  </div>
</template>

<script lang="ts">
import { RouterView } from "vue-router";
export default {
  components: {
    RouterView,
  },
};
</script>

<style></style>
