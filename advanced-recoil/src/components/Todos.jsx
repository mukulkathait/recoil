import React from "react";
import { useRecoilValue } from "recoil";
import { todoAtomFamily } from "../store/atoms/atoms";

function Todos({ id }) {
  const todo = useRecoilValue(todoAtomFamily(id));

  return (
    <>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
    </>
  );
}

export default Todos;
