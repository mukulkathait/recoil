import React from "react";
// import { useContext } from "react";
// import { CountContext } from "../Context";
import { useRecoilValue } from "recoil";
import { countAtom } from "../store/atoms/Count";

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>{count}</div>;
}

export default CountRenderer;
