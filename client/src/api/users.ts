import { client } from ".";

// login api
export const getLogin = async (email, password) => {
  return await client
    .post("/users/login", {
      email: email,
      password: password,
    })
    .then((response) => response)
    .catch((err) => console.log(err));
};

// SignUp api
export const createAccount = async (email, password) => {
  return await client
    .post("/users/create", {
      email: email,
      password: password,
    })
    .then((response) => response)
    .catch((err) => console.log(err));
};
