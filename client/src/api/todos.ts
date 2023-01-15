import { client } from "./";

export const createNewTodo = (jwt, { title: title, content: content }) => {
  client.post("/todos", {
    headers: {
      Authorization: jwt,
    },
    params: { title: title, content: content },
  });
};
