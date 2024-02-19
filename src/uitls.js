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

export function getId() {
  const id = Date.now();
  return id;
}

export const saveTodo = (toSave) => {
  localStorage.setItem("todos", JSON.stringify(toSave));
};

export const getTodos = () => {
  try {
    const todos = JSON.parse(localStorage.getItem("todos"));
    return todos;
  } catch (err) {
    localStorage.clear();
  }
};

export const isEmptyTodos = () => {
  return !getTodos();
};

export const todoFocus = (todo) => {
  setTimeout(() => {
    todo.focus();
  }, 0);
};
