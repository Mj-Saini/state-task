import React, { useEffect, useState } from "react";
function Down(props) {
  const [data, setdata] = useState(1);
  const [changeData, setchangeData] = useState(`Hello`);
  const array = ["One", "Two", "Three"];
  return (
    <>
      <div>
        <button onClick={() => setdata(!data)}> {`${changeData}`}</button>
      </div>
      <div>
        {data
          ? ""
          : array.map((print) => {
              return <h3 onClick={() => setchangeData(print)}>{print}</h3>;
            })}
      </div>
    </>
  );
}

export default Down;
