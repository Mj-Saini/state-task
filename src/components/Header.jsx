import React from "react";

function Header() {
  return (
    <section>
      <nav>
        <div className="container">
          <div className="d-flex justify-content-between align-items-start flex-column justify-content-start py-4 min-vh-100">
            <ul className="">
              <li>
                <a href="#">NavBar</a>
              </li>
            </ul>
            <ul className="p-0 m-0 flex-grow-1 d-flex align-items-center justify-content-center gap-5 flex-column flex-md-row">
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
