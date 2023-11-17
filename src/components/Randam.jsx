import React, { useState } from "react";
import img1 from "../assets/img/11.jpg";
import img2 from "../assets/img/NOTHING.png";

function Randam() {
  const [border, setborder] = useState("");
  const RANDOM = [
    {
      img: img1,
      Classborder: "BOrder__1",
      index: "0",
    },
    {
      img: img1,
      Classborder: "BOrder__2",
      index: "1",
    },
    {
      img: img1,
      Classborder: "BOrder__3",
      index: "2",
    },
  ];

  const CArdcl = (e) => {
    setborder(e);
  };

  return (
    <section className="py-5 min-vh-100">
      <div className="container d-flex justify-content-between">
        {RANDOM.map((data) => {
          return (
            <div
              onClick={() => CArdcl(data.index)}
              style={{ width: "300px", height: "250px" }}
              className={`${
                border === data.index
                  ? `${data.Classborder} position-relative kuch`
                  : "border border-5"
              }`}
            >
              <div className="position-absolute img_des">
                <img className="" src={img2} alt="img2" />
                <h2>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </h2>{" "}
              </div>
              <img className="w-100 h-100" src={data.img} alt="img" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Randam;
