import React, { useState } from "react";

const DownDrop = () => {
  const [show, setShow] = useState(1);
  const [Print, setPrite] = useState("hello");
  const array = ["value", "set", "value"];
  // const mydata = array.map((obj) => {
  //   return <h1>{obj}</h1>;
  // });
  return (
    <>
      <button onClick={() => setShow(!show)}> {`${Print}`}</button>
      <div>
        {show
          ? ""
          : array.map((prnt) => {
              return <h1 onClick={() => setPrite(prnt)}>{prnt}</h1>;
            })}
      </div>
    </>
  );
};

export default DownDrop;
