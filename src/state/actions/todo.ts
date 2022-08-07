let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text,
  };
};
export const getTodo = (text) => {
  return {
    type: "GET_TODO",
    id: nextTodoId++,
    text,
  };
};
