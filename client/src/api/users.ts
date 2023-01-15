import { LoginParams } from "@/interfaces/user";
import { client } from ".";

// login api
export const fetchLogin = async ({
  email: email,
  password: password,
}: LoginParams) => {
  return await client
    .post("/users/login", {
      email: email,
      password: password,
    })
    .then((response) => response)
    .catch((err) => console.log(err));
};

// SignUp api
export const createAccount = async ({
  email: email,
  password: password,
}: LoginParams) => {
  return await client
    .post("/users/create", {
      email: email,
      password: password,
    })
    .then((response) => response)
    .catch((err) => console.log(err));
};
