import React from "react";
import Button from "./Button";
import CountRenderer from "./CountRenderer";
import EvenRender from "./EvenRender";

function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
      <EvenRender />
    </div>
  );
}

export default Count;
