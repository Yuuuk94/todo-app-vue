export type NewTodoType = {
  title: string;
  content: string;
};

export type TodoDataType = {
  data: {
    data: {
      title: string;
      content: string;
      id: string;
    };
  };
};
