import React from "react";
import { useRecoilValue } from "recoil";
import { todoAtomFamily } from "../store/atom";
import { useEffect } from "react";

function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todoAtomFamily(id));

  return (
    <>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
    </>
  );
}

export default Todo;
