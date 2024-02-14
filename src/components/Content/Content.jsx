import { Todo, InputTodo } from "../Todo/Todo";

export default function Content({ appStyles }) {
  return (
    <div className={appStyles.content}>
      <h2 className={appStyles.logo}>todos</h2>
      <InputTodo appStyles={appStyles} />
      <span className={appStyles.hr} />
      <ul className={appStyles.todos}>
        <Todo appStyles={appStyles} text={"Wash up"} />
      </ul>
    </div>
  );
}
