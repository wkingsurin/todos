import { useReducer, useEffect, useRef } from "react";
import { Edit, Complete, Delete } from "../SVG";
import { getTodos, saveTodo, todoFocus } from "../../uitls";
import { todoReducer } from "./todoReducer";

export function Todo({ appStyles, initialTodo, setTodos }) {
  const [todo, dispatch] = useReducer(todoReducer, initialTodo);
  const textRef = useRef(null);

  const handleComplete = () => {
    dispatch({
      type: "completed",
      todos: getTodos(),
      saveTodo: saveTodo,
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "deleted",
      todos: getTodos(),
      saveTodo: saveTodo,
      setTodos: setTodos,
    });
  };

  const handleEdit = () => {
    dispatch({
      type: "edited",
      textRef: textRef,
      todos: getTodos(),
      saveTodo: saveTodo,
      todoFocus: todoFocus,
    });
  };

  const handleEnterPress = (e) => {
    if (e.key == "Enter") {
      dispatch({
        type: "pressed_enter",
        textRef: textRef,
        todos: getTodos(),
        saveTodo: saveTodo,
      });
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const isEditing =
        getTodos().filter((t) => (t.editing ? true : false)).length > 0;
      if (!isEditing) return;

      handleEnterPress(e);
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
