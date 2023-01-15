export type LoginType = {
  data: LoginDataType;
};

export type LoginDataType = {
  token: string;
  message: string;
};

export type LoginParams = {
  email: string;
  password: string;
};
