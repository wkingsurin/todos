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

export function getRandomId() {
  const id =
    "#" +
    getRandomNumber(0, 9) +
    getRandomNumber(0, 9) +
    getRandomNumber(0, 9) +
    getRandomNumber(0, 9);
  return id;
}

export function getRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

export const saveTodo = (toSave) => {
  localStorage.setItem("todos", JSON.stringify(toSave));
};

export const getTodos = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

export const isEmptyTodos = () => {
  return !getTodos();
};

export const todoFocus = (todo) => {
  setTimeout(() => {
    todo.focus();
  }, 0);
};
