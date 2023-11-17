import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GetInputValue() {
  const [value, setValue] = useState("html");
  const navigate = useNavigate();
  const getInput = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };
  useEffect(() => {
    navigate(`/?name=${value}`);
  }, [value]);
  //
  // const Navigation = (path) => {
  //   navigate(path);
  // };

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="d-flex gap-3">
            <div>
              <input
                type="radio"
                id="html"
                value="html"
                checked={value === "html" ? `${value}` : ""}
                name="value"
                Navigation="/html"
                onChange={getInput}
              />
              <label htmlFor="html">html</label>
            </div>
            <div>
              <input
                type="radio"
                id="css"
                value="css"
                name="value"
                onChange={getInput}
              />
              <label htmlFor="css">css</label>
            </div>
            <div>
              <input
                type="radio"
                id="js"
                value="js"
                name="value"
                onChange={getInput}
              />
              <label htmlFor="js">js</label>
            </div>
            <div>
              <input
                type="type"
                value={`${value}`}
                name="value"
                onChange={getInput}
              />
            </div>
          </div>

          {value === "html" && <p>Dont Click Css</p>}
          {value === "css" && <p>Why You Clicking</p>}
          {value === "js" && <p>Im Different</p>}
        </div>
      </section>
    </>
  );
}

export default GetInputValue;
