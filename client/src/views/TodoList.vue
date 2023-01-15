<script lang="ts">
import { defineComponent } from "vue";
import { useMutation, useQuery } from "vue-query";
import { NewTodoType, TodoDataType } from "../interfaces/todos";
import { createNewTodo, getAllTodoList } from "../api/todos";

export default defineComponent({
  setup() {
    const { data, status } = useQuery("todo", getAllTodoList);

    const { isLoading, isError, error, mutate } = useMutation(
      (newTodo: NewTodoType) => {
        return createNewTodo(newTodo);
      }
    );

    return { status, data, mutate };
  },
  data() {
    return {
      // items: this.data,
      newTitle: "",
      newContent: "",
    };
  },
  methods: {
    onSave(e) {
      e.preventDefault();
      if ((this.newTitle.length > 0, this.newContent.length > 0)) {
        const params = {
          title: this.newTitle,
          content: this.newContent,
        };
        this.mutate(params);
      }
    },
  },
});
</script>
<template lang="">
  <div>
    <h2>todo list page</h2>
    <ul v-if="status === 'loading'">
      <li>로딩중</li>
    </ul>
    <ul v-else-if="status === 'success'">
      <li v-for="item in data.data.data" :key="item.title">
        <span>
          {{ item.title }}
        </span>
        <span>
          {{ item.content }}
        </span>
        <span> x </span>
      </li>
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
