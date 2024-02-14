import { Edit, Complete, Remove } from "../SVG";

export function Todo({ appStyles, text }) {
  return (
    <li className={appStyles.todo}>
      <div className={appStyles.textBlock}>
        <p className={appStyles.text}>{text}</p>
        <span className={appStyles.textEdit}>
          <Edit />
        </span>
      </div>
      <div className={appStyles.interaction}>
        <button className={appStyles.complete + " " + appStyles.button}>
          <Complete />
        </button>
        <button className={appStyles.remove + " " + appStyles.button}>
          <Remove />
        </button>
      </div>
    </li>
  );
}
