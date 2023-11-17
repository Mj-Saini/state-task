import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const GsapAnimation = () => {
  //   gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // let gsap = gsap.timeline();

    gsap.fromTo(
      ".newanimation",
      {
        duration: 0.8,
        yPercent: 0,
        autoAlpha: 0,
        ease: "bounce",
      },
      {
        duration: 0.9,
        yPercent: 50,
        autoAlpha: 1,
        ease: "bounce",
      },
      {
        duration: 1.5,
        yPercent: 50,
        autoAlpha: 1,
        ease: "bounce",
      }
    );
    gsap.fromTo(
      ".newanimation2",
      {
        duration: 1.4,
        yPercent: 0,
        autoAlpha: 0,
        ease: "bounce",
      },
      {
        duration: 1.5,
        yPercent: 50,
        autoAlpha: 1,
        ease: "bounce",
      },
      {
        duration: 1.8,
        yPercent: 50,
        autoAlpha: 1,
        ease: "bounce",
      }
    );

    gsap.to(".newanimation3", {
      duration: 0.8,
      yPercent: 50,
      // scale: 0.9,
      ease: "bounce",
    });

    gsap.to(".newanimation4", {
      duration: 0.8,

      yPercent: 50,

      // scale: 0.9,

      ease: "bounce",
    });

    gsap.to(".newanimation5", {
      duration: 0.8,

      yPercent: 50,

      // scale: 0.9,

      ease: "bounce",
    });

    gsap.to(".newanimation6", {
      duration: 0.8,

      yPercent: 50,

      // scale: 0.9,

      ease: "bounce",
    });
    gsap.to(".para", {
      duration: 0.5,
      //   rotate: 360,
      translateX: 50,
      translateY: 50,
      scale: 1,
      position: "absolute",
      scrollTrigger: {
        trigger: ".one",

        opacity: 0,
        start: "0% top",
        end: "10% bottom",
        // markers: true,
        pin: true, //move next section when over the animation present section
      },
    });
    gsap.to(".para2", {
      duration: 1.5,
      //   rotate: 360,
      translateY: 100,
      translateX: 50,
      position: "absolute",
      scale: 1,
      scrollTrigger: {
        trigger: ".two",
        opacity: 0,
        start: "0% top",
        end: "10% bottom",
        // markers: true,
        pin: true, //move next section when over the animation present section
      },
    });
    gsap.to(".para3", {
      duration: 2,
      //   rotate: 360,
      translateX: 50,
      translateY: 150,
      scale: 1,
      position: "absolute",
      scrollTrigger: {
        trigger: ".three",
        opacity: 0,
        start: "0% top",
        end: "10% bottom",

        // markers: true,
        pin: true, //move next section when over the animation present section
      },
    });
  });

  return (
    <>
      <section className="one ps-5">
        <div className="container">
          <p className="para ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            temporibus, tempora asperiores voluptate placeat omnis veritatis cum
            molestias incidunt nesciunt quam nisi fugiat neque obcaecati esse
            praesentium eaque aut sint.
          </p>
        </div>
      </section>
      <section className="two ps-5">
        <div className="container">
          <p className="para2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            temporibus, tempora asperiores voluptate placeat omnis veritatis cum
            molestias incidunt nesciunt quam nisi fugiat neque obcaecati esse
            praesentium eaque aut sint.
          </p>
        </div>
      </section>
      <section className="three ps-5">
        <div className="container">
          <p className="para3 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            temporibus, tempora asperiores voluptate placeat omnis veritatis cum
            molestias incidunt nesciunt quam nisi fugiat neque obcaecati esse
            praesentium eaque aut sint.
          </p>
        </div>
      </section>
      <section className="py-4 px-5">
        <div className="container">
          <div className="d-flex py-5">
            <h1 className="newanimation">M</h1>
            <h1 className="newanimation2">j</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default GsapAnimation;
