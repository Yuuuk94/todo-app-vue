<script lang="ts">
import { client } from "../api";
import { defineComponent } from "vue";
import { useMutation, useQuery } from "vue-query";
import { NewTodoType } from "../interfaces/todos";
import { createNewTodo } from "../api/todos";

export default defineComponent({
  setup() {
    const jwt = localStorage.getItem("jwt");
    const { data } = useQuery("todo", () => {
      client.get("/todos", { headers: { Authorization: jwt } });
    });

    // const { mutate } = useMutation((new:NewTodoType) => createNewTodo(jwt,new));
    return { jwt, data };
  },
  data() {
    return {
      items: this.data,
      newTitle: "",
      newContent: "",
    };
  },
  methods: {
    onSave(e) {
      e.preventDefault();
      if ((this.newTitle.length > 0, this.newContent.length > 0)) {
        console.log(this.newTitle, this.newContent);
        // this.mutate(this.jst, {
        //   title: this.newTitle,
        //   content: this.newContent,
        // });
      }
    },
  },
});
</script>
<template lang="">
  <div>
    <h2>todo list page</h2>
    <ul>
      <li v-for="item in items" :key="item.title">{{ item }}</li>
    </ul>
    <div>
      <h3>새로등록</h3>
      <form>
        <label
          >제목
          <input v-model="newTitle" type="text" />
        </label>
        <label>내용</label>
        <textarea v-model="newContent"></textarea>
        <button type="submit" @click="onSave">등록</button>
      </form>
    </div>
  </div>
</template>
<style lang=""></style>
