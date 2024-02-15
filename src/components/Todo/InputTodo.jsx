import { useState, useRef } from "react";
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
  const inputRef = useRef(null);

  const handleInput = (e) => {
    setInputTodo(() => ({ ...inputTodo, text: e.target.value }));
  };

  const handleSave = () => {
    if (!inputTodo.text.trim()) {
      inputRef.current.style.borderColor = "red";
      inputRef.current.style.color = "red";
      inputRef.current.value = "";
      setTimeout(() => {
        inputRef.current.style.borderColor = "";
        inputRef.current.style.color = "";
      }, 1000);
      return;
    }

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
        ref={inputRef}
        type="text"
        className={input}
        placeholder="Write todo..."
        onInput={(e) => handleInput(e)}
        value={inputTodo.text}
      />
      <button className={save} onClick={(e) => handleSave(e)}>
        save
      </button>
    </div>
  );
}
