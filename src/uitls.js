export const emptyTodo = { completed: false, text: "", editing: false };

export const saveTodo = (toSave) => {
  localStorage.setItem("todos", JSON.stringify(toSave));
};

export const getTodos = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

export const isEmptyTodos = () => {
  return !getTodos();
};
