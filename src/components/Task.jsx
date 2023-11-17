import React from "react";

function TaskBy({ color, setcolor }) {
  return (
    <div>
      {" "}
      <div className={color ? "bg-light min-vh-100" : "bg-danger min-vh-100"}>
        {" "}
        <p className={color ? "text-black fs-3 " : "text-danger bg-dark fs-3"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
          numquam totam iusto perspiciatis obcaecati architecto aliquid est,
          nam, quidem explicabo voluptas culpa. Dolor inventore non odio quam ab
          cupiditate deserunt.{" "}
        </p>{" "}
        <p
          className={
            color ? "text-black fs-3 bg-light" : "text-success bg-dark fs-3"
          }
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
          numquam totam iusto perspiciatis obcaecati architecto aliquid est,
          nam, quidem explicabo voluptas culpa. Dolor inventore non odio quam ab
          cupiditate deserunt.{" "}
        </p>{" "}
        <button
          className={
            color
              ? "bg-dark  text-white px-3 py-2"
              : "text-danger bg-light py-3 px-4 "
          }
          onClick={() => setcolor(!color)}
        >
          cng clr{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}

export default TaskBy;
