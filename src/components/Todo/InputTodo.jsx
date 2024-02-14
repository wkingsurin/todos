import { useState } from "react";

export function InputTodo({ appStyles, setTodos }) {
  const { newTodo, input, save } = appStyles;
  const [inputTodo, setInputTodo] = useState({ completed: false, text: "" });

  const handleInput = (e) => {
    setInputTodo(() => ({ ...inputTodo, text: e.target.value }));
  };

  const handleSave = () => {
    if (!getTodos()) {
      saveTodo([inputTodo]);
      setInputTodo(() => ({ completed: false, text: "" }));
      setTodos(getTodos());
    } else {
      saveTodo([...getTodos(), inputTodo]);
      setInputTodo(() => ({ completed: false, text: "" }));
      setTodos(getTodos());
    }
  };

  function saveTodo(toSave) {
    localStorage.setItem("todos", JSON.stringify(toSave));
  }

  function getTodos() {
    return JSON.parse(localStorage.getItem("todos"));
  }

  return (
    <div className={newTodo}>
      <input
        type="text"
        className={input}
        placeholder="Write todo..."
        onInput={(e) => handleInput(e)}
        value={inputTodo.text}
      />
      <button className={save} onClick={handleSave}>
        save
      </button>
    </div>
  );
}
