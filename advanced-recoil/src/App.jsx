import { RecoilRoot } from "recoil";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <RecoilRoot>
        <Todos id={1} />
        <Todos id={2} />
      </RecoilRoot>
    </>
  );
}

export default App;
