export function todoReducer(todo, action) {
  switch (action.type) {
    case "completed": {
      let nextTodo = {
        ...todo,
        completed: { ...todo.completed, status: true },
        editing: false,
      };
      const nextTodos = action.todos.map((t) =>
        t.id == nextTodo.id ? nextTodo : t
      );
      action.saveTodo(nextTodos);
      return nextTodo;
    }
    case "deleted": {
      const nextTodos = action.todos.filter((t) => t.id !== todo.id);
      action.saveTodo(nextTodos);
      action.setTodos(nextTodos);
      break;
    }
    case "edited": {
      let nextTodo = {
        ...todo,
        editing: !todo.editing,
        text: action.textRef.current.textContent.trim(),
      };
      const filteredTodos = action.todos.map((t) => {
        return t.id === nextTodo.id ? nextTodo : t;
      });
      const nextTodos = [...filteredTodos];
      action.saveTodo(nextTodos);
      action.todoFocus(action.textRef.current);
      return nextTodo;
    }
    case "pressed_enter": {
      let nextTodo = {
        ...todo,
        editing: false,
        text: action.textRef.current.textContent.trim(),
      };
      const filteredTodos = action.todos.filter((t) => t.id !== nextTodo.id);
      const nextTodos = [...filteredTodos, nextTodo];
      action.saveTodo(nextTodos);
      return nextTodo;
    }
    default:
      throw Error(`Unknown action.type: ${action.type}!`);
  }
}
