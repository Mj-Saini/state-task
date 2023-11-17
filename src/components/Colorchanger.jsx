import React from "react";

function Colorchanger({ color, setcolor }) {
  return (
    <>
      <section>
        <p className={color ? "text-black " : "text-danger"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae optio
          veritatis nostrum natus vel, sint dolorem maiores eum amet. Rerum
          pariatur, ea qui nisi voluptatum quasi illum aut eos minima?
        </p>
        <button onClick={() => setcolor(!color)}>changer</button>
      </section>
    </>
  );
}

export default Colorchanger;
