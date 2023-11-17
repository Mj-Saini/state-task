import React from "react";

function DownOnHover() {
  return (
    <>
      <section>
        <div className="container">
          <div className="d-flex justify-content-center mt-5">
            <div>
              <h1>Say-Something</h1>
              <div className=" d-flex flex-column gap-5 justify-content-center align-items-center">
                <span>
                  <a className="text-center" href="#">
                    Hey
                  </a>
                </span>
                <span>
                  <a className="text-center" href="#">
                    Hello
                  </a>
                </span>
                <span>
                  <a className="text-center" href="#">
                    Good
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DownOnHover;
