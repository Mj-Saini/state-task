import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import graph1 from "../assets/img/webp/graph1.webp";
import graph from "../assets/img/webp/graph.webp";
import intelli from "../assets/img/webp/intelli.webp";
import anylise from "../assets/img/webp/anylise.webp";

function Actives({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  const MyState = [graph1, graph, intelli, anylise];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveTab((activeTab + 1) % MyState.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [activeTab, tabs]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section id="Approch" className="py-4 mt-xl-4 py-md-5">
        <div>
          <Row>
            <div className="col-md-7 pe-md-0">
              <div className="cards_blue2 d-flex flex-column justify-content-between">
                {" "}
                <Row className="pb-3">
                  <div className="col-sm-3 col-6 ps-sm-0">
                    {" "}
                    <div
                      className={
                        activeTab === "Big-data"
                          ? " Active py-2 mb-1 px-3 d-flex flex-column align-items-center align-items-sm-start"
                          : "py-2 mb-1 px-3 d-flex flex-column align-items-center align-items-sm-start"
                      }
                      onClick={() => handleTabClick("Big-data")}
                    >
                      <span
                        style={{
                          background: "#141F45",
                          borderRadius: "1.90514px",
                          padding: "6px 8px",
                        }}
                        className="text-white "
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            className={
                              activeTab === "Big-data" ? "fill-green" : ""
                            }
                            width="22"
                            height="22"
                            rx="1.90514"
                            fill="none"
                          />
                          <path
                            d="M9.16699 6.41675V8.25008H11.0003V15.5834H12.8337V6.41675H9.16699Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <h3 className="pt-2 mt-1 ff_Seoge fw-semibold fs_md text-white">
                        Big <span className="d-sm-block">Data</span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-sm-3 col-6 ps-sm-0">
                    {" "}
                    <div
                      className={
                        activeTab === "Event-Driven"
                          ? " Active py-2 mb-1 px-3 d-flex flex-column align-items-center align-items-sm-start"
                          : "py-2 mb-1 px-3 d-flex flex-column align-items-center align-items-sm-start"
                      }
                      onClick={() => handleTabClick("Event-Driven")}
                    >
                      <span
                        style={{
                          background: "#141F45",
                          borderRadius: "1.90514px",
                          padding: "6px 8px",
                        }}
                        className="text-white"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            className={
                              activeTab === "Event-Driven" ? "fill-green" : ""
                            }
                            width="22"
                            height="22"
                            rx="1.90514"
                            fill="#141F45"
                          />
                          <path
                            d="M8.25037 6.41675V8.25008H11.917V10.0834H10.0837C9.59747 10.0834 9.13115 10.2766 8.78734 10.6204C8.44352 10.9642 8.25037 11.4305 8.25037 11.9167V15.5834H13.7504V13.7501H10.0837V11.9167H11.917C12.4033 11.9167 12.8696 11.7236 13.2134 11.3798C13.5572 11.036 13.7504 10.5696 13.7504 10.0834V8.25008C13.7504 7.76385 13.5572 7.29754 13.2134 6.95372C12.8696 6.6099 12.4033 6.41675 11.917 6.41675H8.25037Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <h3 className="pt-2 mt-1 ff_Seoge fw-semibold fs_md text-white">
                        Event- <span className="d-sm-block">Driven</span>
                      </h3>
                    </div>
                  </div>{" "}
                  <div className="col-sm-3 col-6 ps-sm-0">
                    {" "}
                    <div
                      className={
                        activeTab === "Artificial Intelligence"
                          ? " Active py-2 mb-1 px-3 d-flex flex-column align-items-center align-items-sm-start"
                          : "py-2 mb-1 px-3 d-flex flex-column align-items-center align-items-sm-start"
                      }
                      onClick={() => handleTabClick("Artificial Intelligence")}
                    >
                      <span
                        style={{
                          background: "#141F45",
                          borderRadius: "1.90514px",
                          padding: "6px 8px",
                        }}
                        className="text-white"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            className={
                              activeTab === "Artificial Intelligence"
                                ? "fill-green "
                                : ""
                            }
                            width="22"
                            height="22"
                            rx="1.90514"
                            fill="#141F45"
                          />
                          <path
                            d="M13.7507 13.7501V12.3751C13.7507 12.0104 13.6059 11.6607 13.348 11.4028C13.0901 11.1449 12.7404 11.0001 12.3757 11.0001C12.7404 11.0001 13.0901 10.8552 13.348 10.5974C13.6059 10.3395 13.7507 9.98975 13.7507 9.62508V8.25008C13.7507 7.76385 13.5576 7.29754 13.2138 6.95372C12.8699 6.6099 12.4036 6.41675 11.9174 6.41675H8.25073V8.25008H11.9174V10.0834H10.0841V11.9167H11.9174V13.7501H8.25073V15.5834H11.9174C12.4036 15.5834 12.8699 15.3903 13.2138 15.0464C13.5576 14.7026 13.7507 14.2363 13.7507 13.7501Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <h3 className="pt-2 mt-1 ff_Seoge fw-semibold fs_md text-white text-center text-sm-start">
                        Artificial{" "}
                        <span className="d-sm-block">Intelligence</span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-sm-3 col-6 ps-sm-0">
                    {" "}
                    <div
                      className={
                        activeTab === "Predictive Analytics"
                          ? " Active py-2 mb-1 px-3 d-flex flex-column align-items-center align-items-sm-start"
                          : "py-2 mb-1 px-3 d-flex flex-column align-items-center align-items-sm-start"
                      }
                      onClick={() => handleTabClick("Predictive Analytics")}
                    >
                      <span
                        style={{
                          background: "#141F45",
                          borderRadius: "1.90514px",
                          padding: "6px 8px",
                        }}
                        className="text-white"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            className={
                              activeTab === "Predictive Analytics"
                                ? "fill-green"
                                : ""
                            }
                            width="22"
                            height="22"
                            rx="1.90514"
                            fill="#141F45"
                          />
                          <path
                            d="M8.24988 6.41675V11.9167H11.9165V15.5834H13.7499V6.41675H11.9165V10.0834H10.0832V6.41675H8.24988Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <h3 className="pt-2 mt-1 ff_Seoge fw-semibold fs_md text-white text-center text-sm-start">
                        Predictive{" "}
                        <span className="d-sm-block"> Analytics</span>
                      </h3>
                    </div>
                  </div>
                </Row>
                {activeTab === "Big-data" && (
                  <Row
                    style={{ background: "#141F45", borderRadius: "8px" }}
                    className=" align-items-center mt-md-5 mt-4 pt-xl-4"
                  >
                    <div className="col-xl-6 ">
                      <div className="py-4 px-3">
                        <img
                          className="w-100 pe-3"
                          src={MyState[activeTab]}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className=" ps-xl-5">
                        <h2 className=" ff_Seoge fw-semibold fs_xl text-white mb-0 ps-xl-3">
                          Big Data
                        </h2>{" "}
                        <p className=" ff_Seoge fw-semibold fs_xsm text-white opacity_07 mb-0 mt-xl-3 mt-2 pb-4 pt-1 ps-xl-3">
                          We gather hundreds of millions of{" "}
                          <spa className="d-xxl-block" n>
                            data points in order to perform
                          </spa>{" "}
                          advanced analytics to identify the{" "}
                          <span className="d-xxl-block">
                            {" "}
                            highest propensity prospects
                          </span>
                        </p>
                      </div>
                    </div>
                  </Row>
                )}
                {activeTab === "Event-Driven" && (
                  <Row
                    style={{ background: "#141F45", borderRadius: "8px" }}
                    className=" align-items-center mt-md-5 mt-4 pt-xl-4"
                  >
                    <div className="col-xl-6 ">
                      <div className="py-4 px-3">
                        <img
                          className="w-100 pe-3"
                          src={MyState[activeTab]}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className=" ps-xl-5">
                        <h2 className=" ff_Seoge fw-semibold fs_xl text-white mb-0 ps-xl-3">
                          Big Data
                        </h2>{" "}
                        <p className=" ff_Seoge fw-semibold fs_xsm text-white opacity_07 mb-0 mt-xl-3 mt-2 pb-4 pt-1 ps-xl-3">
                          We gather hundreds of millions of{" "}
                          <spa className="d-xxl-block" n>
                            data points in order to perform
                          </spa>{" "}
                          advanced analytics to identify the{" "}
                          <span className="d-xxl-block">
                            {" "}
                            highest propensity prospects
                          </span>
                        </p>
                      </div>
                    </div>
                  </Row>
                )}
                {activeTab === "Artificial Intelligence" && (
                  <Row
                    style={{ background: "#141F45", borderRadius: "8px" }}
                    className=" align-items-center mt-md-5 mt-4 pt-xl-4"
                  >
                    <div className="col-xl-6 ">
                      <div className="py-4 px-3">
                        <img
                          className="w-100 pe-3"
                          src={MyState[setActiveTab]}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className=" ps-xl-5">
                        <h2 className=" ff_Seoge fw-semibold fs_xl text-white mb-0 ps-xl-3">
                          Big Data
                        </h2>{" "}
                        <p className=" ff_Seoge fw-semibold fs_xsm text-white opacity_07 mb-0 mt-xl-3 mt-2 pb-4 pt-1 ps-xl-3">
                          We gather hundreds of millions of{" "}
                          <spa className="d-xxl-block" n>
                            data points in order to perform
                          </spa>{" "}
                          advanced analytics to identify the{" "}
                          <span className="d-xxl-block">
                            {" "}
                            highest propensity prospects
                          </span>
                        </p>
                      </div>
                    </div>
                  </Row>
                )}
                {activeTab === "Predictive Analytics" && (
                  <Row
                    style={{ background: "#141F45", borderRadius: "8px" }}
                    className=" align-items-center mt-md-5 mt-4 pt-xl-4"
                  >
                    <div className="col-xl-6 ">
                      <div className="py-4 px-3">
                        <img
                          className="w-100 pe-3"
                          src={MyState[activeTab]}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className=" ps-xl-5">
                        <h2 className=" ff_Seoge fw-semibold fs_xl text-white mb-0 ps-xl-3">
                          Big Data
                        </h2>{" "}
                        <p className=" ff_Seoge fw-semibold fs_xsm text-white opacity_07 mb-0 mt-xl-3 mt-2 pb-4 pt-1 ps-xl-3">
                          We gather hundreds of millions of{" "}
                          <spa className="d-xxl-block" n>
                            data points in order to perform
                          </spa>{" "}
                          advanced analytics to identify the{" "}
                          <span className="d-xxl-block">
                            {" "}
                            highest propensity prospects
                          </span>
                        </p>
                      </div>
                    </div>
                  </Row>
                )}
              </div>
            </div>
            <div className="col-md-5 mt-4 mt-md-0">
              <div className="cards_blue d-flex flex-column justify-content-between">
                <h2 className="ff_Seoge fw-semibold fs_4x2l text-white mb-0">
                  Our <span className="d-block"> approach</span>
                </h2>
                <div className="mt-5 mt-md-0">
                  {" "}
                  <h2 className=" ff_Seoge fw-normal fs_4x2l text-white mb-0">
                    200k<span className=" fs_3x0l">Properties</span>
                  </h2>
                  <p className=" ff_Seoge fw-normal fs_md text-white opacity_07 mb-0 mt-3">
                    of wealth will be transitioned in{" "}
                    <span className="d-lg-block"> the next 25 years.</span>
                  </p>
                  <span style={{}} className="mt-3 d-inline-block sign_up_btn">
                    <a
                      className="text-white fw-normal fs_md text-center"
                      href="#"
                    >
                      Sign up
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Actives;
