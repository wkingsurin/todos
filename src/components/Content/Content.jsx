import { Todo } from "../Todo/Todo";
import { InputTodo } from "../Todo/InputTodo";
import { useState, useEffect } from "react";
import { getTodos } from "../../uitls";

export default function Content({ appStyles }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (getTodos()) {
      setTodos(() => [...getTodos()]);
    }
  }, []);

  const todosList = todos.map((todo) => (
    <Todo key={todo.text} appStyles={appStyles} text={todo.text} />
  ));

  return (
    <div className={appStyles.content}>
      <h2 className={appStyles.logo}>todos</h2>
      <InputTodo appStyles={appStyles} setTodos={setTodos} />
      <span className={appStyles.hr} />
      <ul className={appStyles.todos}>
        {todos.length > 0 ? (
          todosList
        ) : (
          <div className={appStyles.emptyTodos}>Empty todos</div>
        )}
      </ul>
    </div>
  );
}
