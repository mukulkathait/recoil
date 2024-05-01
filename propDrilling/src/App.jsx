import { useState } from "react";
import Count from "./components/Count";
import { CountContext } from "./Context";
import { RecoilRoot } from "recoil";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

export default App;
