import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useState } from "react";
import Colorchanger from "./components/Colorchanger";
import Taskby from "./components/Task";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Btw from "./components/RefUse";
import Mapnest from "./components/Mapnest";
import DownDrop from "./components/DownDrop";
import Down from "./components/Down";
import NavTabs from "./components/NavTabs";
import Slider from "./components/Slider";
import modls from "./components/Modls";
import Modls from "./components/Modls";
import Actives from "./components/Actives";
import States from "./components/States";
import Stucked from "./components/Stucked";
import Header from "./components/Header";
import Form from "./components/Form";
import Randam from "./components/Randam";
import GetInput from "./components/GetInput";
import GetInputValue from "./components/GetInputValue";
import GsapAnimation from "./components/GsapAnimation";
import FormVelidation from "./components/FormVelidation";
import { Route, Routes, useParams } from "react-router-dom";
import MapCards from "./components/MapCards";
import Swiperslider from "./components/Swiperslider";

function App() {
  const [color, setcolor] = useState(1);
  const [text, setText] = useState([
    // {
    //   text: "lorem",
    //   buttunclass: "",
    // },
    // {
    //   text: "ipsum",
    //   buttun: [
    //     {
    //       btn: "go",
    //       buttunclass: "bg-info",
    //     },
    //     {
    //       btn: "in",
    //       buttunclass: "bg-info",
    //     },
    //     {
    //       btn: "out",
    //       buttunclass: "bg-info",
    //     },
    //   ],
    // },
    // {
    //   text: "dollor",
    //   buttun: [
    //     {
    //       btn: "okay",
    //     },
    //     {
    //       btn: "okk",
    //     },
    //     {
    //       btn: "okh",
    //     },
    //   ],
    // },
  ]);
  const doprams = useParams();
  console.log(doprams);

  return (
    <div className="overflow-hidden">
      {/* <Colorchanger color={color} setcolor={setcolor} /> */}
      {/* <Taskby color={color} setcolor={setcolor} /> */}
      {/* <Btw /> */}
      <Mapnest color={color} setcolor={setcolor} text={text} />
      {/* <DownDrop /> */}
      {/* <Down /> */}
      {/* <Slider /> */}
      {/* <Modls /> */}
      {/* <NavTabs /> */}
      {/* <Actives /> */}
      {/* <States /> */}
      {/* <Stucked /> */}
      {/* <Header /> */}
      <Form />
      {/* <Randam /> */}
      {/* <GetInputValue /> */}
      {/* <Swiperslider /> */}
      {/* <GsapAnimation /> */}

      <Routes>
        <Route path="/" element={<FormVelidation />} />
      </Routes>
      {/* <MapCards /> */}
    </div>
  );
}

export default App;
