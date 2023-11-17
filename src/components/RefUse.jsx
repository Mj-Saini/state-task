import React, { useRef } from "react";
import Slider from "react-slick";
import Btnref from "./Btnref";

function Btw() {
  const myRef = useRef();
  function btnPrev() {
    myRef.current.slickPrev();
  }
  function btnNext() {
    myRef.current.slickNext();
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2 className="text-center mt-5"> dont think about this</h2>

      <div>
        <Btnref btnPrev={btnPrev} btnNext={btnNext} ref={myRef} />
      </div>
      <Slider ref={myRef} {...settings}>
        <div className="d-flex justify-content-center">
          <h3>1</h3>
        </div>
        <div className="d-flex justify-content-center">
          <h3>2</h3>
        </div>
        <div className="d-flex justify-content-center">
          <h3>3</h3>
        </div>
        <div className="d-flex justify-content-center">
          <h3>4</h3>
        </div>
        <div className="d-flex justify-content-center">
          <h3>5</h3>
        </div>
        <div className="d-flex justify-content-center">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Btw;
