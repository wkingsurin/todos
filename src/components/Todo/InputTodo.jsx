import { useState } from "react";
import {
  emptyTodo,
  saveTodo,
  getTodos,
  isEmptyTodos,
  getRandomId,
} from "../../uitls";

export function InputTodo({ appStyles, setTodos }) {
  const { newTodo, input, save } = appStyles;
  const [inputTodo, setInputTodo] = useState({
    ...emptyTodo,
    id: getRandomId(),
  });

  const handleInput = (e) => {
    setInputTodo(() => ({ ...inputTodo, text: e.target.value }));
  };

  const handleSave = () => {
    if (!inputTodo.text.trim()) return;

    if (isEmptyTodos()) {
      saveTodo([inputTodo]);
      setInputTodo({ ...emptyTodo, id: getRandomId() });
      setTodos(getTodos());
    } else {
      saveTodo([...getTodos(), inputTodo]);
      setInputTodo({ ...emptyTodo, id: getRandomId() });
      setTodos(getTodos());
    }
  };

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
