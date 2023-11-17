// import React, { useState } from "react";
// import { StackedCarousel } from "react-stacked-carousel";
// import "react-stacked-carousel/dist/index.css";

// function Stucked() {
//   const [card, setCard] = useState(null);
//   const onCardChange = (event) => {
//     console.log("Card", event);
//   };
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };
//   return (
//     <div className="App">
//       <StackedCarousel
//         autoRotate={false}
//         slidesToShow={3}
//         onCardChange={onCardChange}
//         containerClassName={"container"}
//         cardClassName="card"
//         leftButton={<button>{"<"}</button>}
//         rightButton={<button>{">"}</button>}
//       >
//         <div key={"child1"}>
//           <h2>1 Card</h2>
//         </div>
//         <div key={"child2"}>
//           <h2>2 Card</h2>
//         </div>
//         <div key={"child3"}>
//           <h2>3 Card</h2>
//         </div>
//         <div key={"child4"}>
//           <h2>4 Card</h2>
//         </div>
//         <div key={"child5"}>
//           <h2>5 Card</h2>
//         </div>
//         <div key={"child6"}>
//           <h2>6 Card</h2>
//         </div>
//         <div key={"child7"}>
//           <h2>7 Card</h2>
//         </div>
//         <div key={"child8"}>
//           <h2>8 Card</h2>
//         </div>
//       </StackedCarousel>
//     </div>
//   );
// }
// export default Stucked;
