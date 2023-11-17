import React, { forwardRef } from "react";
import { myRef } from "./RefUse";

function Btnref(props, myRef) {
  return (
    <div className="mb-5 mt-3 d-flex justify-content-center gap-4">
      {" "}
      <button onClick={props.btnPrev}>okhh</button>
      <button onClick={props.btnNext}>okay</button>
    </div>
  );
}

export default forwardRef(Btnref);
