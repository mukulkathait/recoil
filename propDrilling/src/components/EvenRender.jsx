import React from "react";
import { useRecoilValue } from "recoil";
import { evenSelector } from "../store/atoms/Count";

function EvenRender() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "It is Even" : null}</div>;
}

export default EvenRender;
