export const emptyTodo = {
  completed: {
    status: false,
    theme: {
      background: "#F6F6F9",
    },
  },
  text: "",
  editing: false,
};

export const saveTodo = (toSave) => {
  localStorage.setItem("todos", JSON.stringify(toSave));
};

export const getTodos = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

export const isEmptyTodos = () => {
  return !getTodos();
};
