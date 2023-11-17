import React, { useEffect, useState } from "react";
import img from "../assets/img/11.jpg";
import img1 from "../assets/img/14.jpg";
import img2 from "../assets/img/13.jpg";

function States() {
  const [activeTab, setActiveTab] = useState(0);
  const array = [img, img1, img2];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((lastIndex) => (lastIndex + 1) % array.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section>
        <div>
          <div className="d-flex gap-4">
            {/* {" "}
            <button onClick={() => setActiveTab(0)}>one</button>
            <button onClick={() => setActiveTab(1)}>Two</button>
            <button onClick={() => setActiveTab(2)}>Three</button> */}
          </div>
          <div className="w-50 mx-auto">
            <img className="mx-auto" src={array[activeTab]} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default States;
