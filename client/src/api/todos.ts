import { authState } from "@/store/atom";
import { useRecoilState } from "vue-recoil";
import { client } from "./";
const [auth] = useRecoilState(authState);

export const getAllTodoList = async () => {
  return await client
    .get("/todos", { headers: { Authorization: auth } })
    .then((response) => response)
    .catch((err) => console.log(err));
};

export const createNewTodo = async ({ title: title, content: content }) => {
  const param = { title: title, content: content };
  return await client
    .post("/todos", param, {
      headers: {
        Authorization: auth,
      },
    })
    .catch((err) => console.log(err));
};
