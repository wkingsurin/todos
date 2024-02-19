import { useState, useEffect, useRef } from "react";
import { Edit, Complete, Delete } from "../SVG";
import { getTodos, saveTodo, todoFocus } from "../../uitls";

export function Todo({ appStyles, initialTodo, setTodos }) {
  const [todo, setTodo] = useState(initialTodo);
  const textRef = useRef(null);

  const handleComplete = () => {
    setTodo((todo) => {
      let nextTodo = {
        ...todo,
        completed: { ...todo.completed, status: true },
        editing: false,
      };
      const nextTodos = getTodos().map((t) =>
        t.id == nextTodo.id ? nextTodo : t
      );
      saveTodo(nextTodos);
      return nextTodo;
    });
  };

  const handleDelete = () => {
    const nextTodos = getTodos().filter((t) => t.id !== todo.id);
    setTodos(nextTodos);
    saveTodo(nextTodos);
  };

  const handleEdit = () => {
    setTodo((todo) => {
      let nextTodo = {
        ...todo,
        editing: !todo.editing,
        text: textRef.current.textContent.trim(),
      };
      const filteredTodos = getTodos().map((t) => {
        return t.id === nextTodo.id ? nextTodo : t;
      });
      const nextTodos = [...filteredTodos];
      saveTodo(nextTodos);
      todoFocus(textRef.current);
      return nextTodo;
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const isEditing =
        getTodos().filter((t) => (t.editing ? true : false)).length > 0;
      if (!isEditing) return;

      if (e.key == "Enter") {
        setTodo((todo) => {
          let nextTodo = {
            ...todo,
            editing: false,
            text: textRef.current.textContent.trim(),
          };
          const filteredTodos = getTodos().filter((t) => t.id !== nextTodo.id);
          const nextTodos = [...filteredTodos, nextTodo];
          saveTodo(nextTodos);
          return nextTodo;
        });
      }
    });
  }, []);

  return (
    <li
      className={appStyles.todo}
      style={(todo.completed.status && todo.completed.theme) || {}}
    >
      <div className={appStyles.textBlock}>
        <p
          ref={textRef}
          className={appStyles.text}
          contentEditable={todo.editing}
          suppressContentEditableWarning={true}
          tabIndex={-1}
        >
          {todo.text}
        </p>
        {todo.completed.status ? (
          <p className={appStyles.completed}>Completed</p>
        ) : (
          <span className={appStyles.textEdit} onClick={handleEdit}>
            <Edit />
            <p>{todo.editing ? "Save" : "Edit"}</p>
          </span>
        )}
      </div>
      <div className={appStyles.interaction}>
        {todo.completed.status == false && (
          <button
            className={appStyles.complete + " " + appStyles.button}
            onClick={handleComplete}
          >
            <Complete />
          </button>
        )}
        <button
          className={appStyles.remove + " " + appStyles.button}
          onClick={handleDelete}
        >
          <Delete />
        </button>
      </div>
    </li>
  );
}
