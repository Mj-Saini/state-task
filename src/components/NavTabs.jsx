import React, { useState } from "react";

const NavTabs = () => {
  const aray = [
    {
      text: "tab",
      data: "tab1:lorem ipsum todinmal",
      cls: "green ",
    },
    {
      text: "tab",
      data: "tab2:hey are you all right. ",
      cls: "red ",
    },
  ];
  const [activeTab, setActiveTab] = useState("");
  const [color, setColor] = useState("");
  const clr = (e) => {
    setColor(e);
  };
  const show = (e) => {
    console.log(e);
    setActiveTab(e);
  };
  return (
    <>
      <section className="py-5">
        <div className="d-flex gap-5 pb-4 ">
          {" "}
          {aray.map((obj, i) => {
            return (
              <h1
                className={color ? "text-pramary" : "text-danger"}
                onClick={() => {
                  show(obj.data);
                  clr(obj.cls);
                }}
              >
                {obj.text}
              </h1>
            );
          })}
        </div>

        <h1 style={{ color: `${color}` }}> {`${activeTab}`}</h1>
      </section>
    </>
  );
};

export default NavTabs;
