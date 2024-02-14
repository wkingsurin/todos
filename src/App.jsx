import appStyles from "./App.module.css";
import "normalize.css";

import Content from "./components/Content/Content";

export default function App() {
  return (
    <>
      <div className={appStyles.container}>
        <Content appStyles={appStyles} />
      </div>
    </>
  );
}
