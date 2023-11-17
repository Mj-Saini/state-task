import React, { useState, useEffect } from "react";
import img1 from "../assets/img/a.jpg";
import img2 from "../assets/img/cube.jpg";
import img3 from "../assets/img/b.jpg";
import img4 from "../assets/img/dia.jpg";
import img5 from "../assets/img/Ice.webp";
import img6 from "../assets/img/Redfish.jpg";
import img7 from "../assets/img/c.jpg";
import img8 from "../assets/img/groot.jpg";
import img9 from "../assets/img/viatnam.jpg";
import im9g from "../assets/img/Tiger.jpg";
import img11 from "../assets/img/11.jpg";
import img12 from "../assets/img/18.jpg";
import img13 from "../assets/img/13.jpg";
import img14 from "../assets/img/14.jpg";
import img15 from "../assets/img/15.jpg";
import img16 from "../assets/img/a.jpg";
import img17 from "../assets/img/17.jpg";
import img18 from "../assets/img/18.jpg";
import img19 from "../assets/img/19.jpg";
import img20 from "../assets/img/20.jpg";
import img21 from "../assets/img/21.jpg";
import img22 from "../assets/img/22.jpg";
import img23 from "../assets/img/23.jpg";
import img24 from "../assets/img/24.jpg";
import img25 from "../assets/img/25.jpg";
import { Container } from "react-bootstrap";

const Slider = () => {
  const [Index, setIndex] = useState(0);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    im9g,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
  ];
  let Next = () => {
    if (Index < images.length - 1) {
      setIndex(Index + 1);
    }
  };
  let Prev = () => {
    if (Index > 0) {
      setIndex(Index - 1);
    }
  };

  return (
    <>
      <Container className="min-vh-100">
        <div className="w-100 h-100 d-flex justify-content-center align-items-center mt-4">
          <div className="row justify-content-center">
            <div className="col-4 position-relative">
              <div
                style={{ height: "100%", zIndex: "4" }}
                className="px-2 d-flex align-items-center h-100"
              >
                <img
                  style={{ width: "100%", height: "500px", zIndex: "4" }}
                  src={images[Index]}
                  alt="slider"
                />
              </div>
              <div
                style={{ height: "100%", zIndex: "3" }}
                className="px-2 d-flex align-items-center h-100 position-absolute top-0 start-50 translate-middle-x"
              >
                <img
                  style={{
                    width: "100%",
                    height: "400px",
                    transitionDelay: "400ms",
                  }}
                  src={images[Index - 1]}
                  alt="slider"
                />
              </div>
              <div
                style={{ height: "100%", zIndex: "2" }}
                className="px-2 d-flex align-items-center position-absolute top-0 start-50 "
              >
                {" "}
                <img
                  style={{ width: "100%", height: "400px" }}
                  src={images[Index + 1]}
                  alt="slider"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <section id="Disease" className="py-4 py-lg-5 mt-5 position-relative">

          <div className="col-xxl-5 col-lg-6 mt-4 mt-lg-0">
            <div className="w-100 my-sm-4 pb-4 pb-sm-0 py-2 z_index1 position-relative d-flex justify-content-center justify-content-lg-start">
              <Slider>
                {images.map((image, i) => (
                  <div key={i}>
                    <img src={image} alt="slider" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        
        </section> */}
        {/* <div className=" d-flex justify-content-center mt-4 gap-3">
          <button
            className="strock_ fw-bold fs-4 text-white px-3 py-2"
            onClick={() => {
              Prev();
            }}
            style={{
              backgroundImage: `url(${images[Index - 1]})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            Prev
          </button>
          <button
            style={{
              backgroundImage: `url(${images[Index + 1]})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="strock_ fw-bold fs-4 text-white px-3 py-2"
            onClick={() => {
              Next();
            }}
          >
            Next
          </button>
        </div>  */}
      </Container>
    </>
  );
};
export default Slider;
