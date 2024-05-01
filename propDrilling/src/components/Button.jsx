import React from "react";
// import { useContext } from "react";
// import { CountContext } from "../Context";
import { useRecoilState, useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/Count";

function Button() {
  // const { setCount } = useContext(CountContext);
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Button;
