export const emptyTodo = { completed: false, text: "" };

export const saveTodo = (toSave) => {
  localStorage.setItem("todos", JSON.stringify(toSave));
};

export const getTodos = () => {
  return JSON.parse(localStorage.getItem("todos"));
};
