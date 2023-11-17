import React from "react";
import { useState } from "react";
const MapCards = () => {
  const Optionallydata = [
    {
      Option: "Optional",
      Form: "Form W-9",
      // icon:<DragAndDropIcon />,
      Text: "drag and drop here",
      upload: "Uploaded",
      verify: "Verified",
      btnColor: "bg-info",
    },
    {
      Option: "Optional",
      Form: "General Liability Insurance",
      // icon:<DragAndDropIcon />,
      Text: "drag and drop here",
      upload: "Uploaded",
      verify: "Verified",
      btnColor: "bg-info",
    },
    {
      Option: "Optional",
      Form: "Cyber Insurance",
      // icon:<DragAndDropIcon />,
      Text: "drag and drop here",
      upload: "Uploaded",
      verify: "Verified",
      btnColor: "bg-info",
    },
    {
      Option: "Optional",
      Form: "E&O Insurance",
      // icon:<DragAndDropIcon />,
      Text: "drag and drop here",
      upload: "Uploaded",
      verify: "Verified",
      btnColor: "bg-sucess",
    },
    {
      Option: "Optional",
      Form: "D&O Insurance",
      // icon:<DragAndDropIcon />,
      Text: "drag and drop here",
      upload: "Uploaded",
      btnColor: "bg-primary",
      verify: "Verified",
    },
    {
      Option: "Optional",
      Form: "Supplier Diversity Certificate",
      // icon:<DragAndDropIcon />,
      Text: "drag and drop here",
      upload: "Uploaded",
      verify: "Verified",
      btnColor: "bg-secondary",
    },
    {
      Option: "Optional",
      Form: "Income Statement",
      // icon:<DragAndDropIcon />,
      Text: "drag and drop here",
      upload: "Uploaded",
      btnColor: "bg-warning",
      verify: "Verified",
    },
    {
      Option: "Optional",
      Form: "Balance Sheet",
      // icon:<DragAndDropIcon />,
      Text: "drag and drop here",
      upload: "Uploaded",
      verify: "Verified",
      btnColor: "bg-dark",
    },
  ];

  return (
    <div className="container px-3 sm:px-5 xl:px-5 xl:max-w-[1320px] 2xl:max-w-[1440px] pt-[52px]">
      {Optionallydata &&
        Optionallydata.map((obj, i) => {
          return (
            <div className="lg:flex items-center justify-between pt-4 pb-8 lg:py-4 bg-gray7 backdrop-blur-6 sm:max-w-[500px] mx-auto md:max-w-full rounded-xl px-4 sm:px-8 mt-4">
              <p className="mb-0 text-xs md:text-sm font-medium text-white1 xl:w-1/4 xl:ms-14  text-center lg:text-start py-4 px-6 ">
                {obj.Option}
              </p>
              <div className="md:max-w-[800px] 2xl:max-w-[827px] w-full md:flex justify-between">
                <div className="flex flex-col justify-center items-center lg:ms-14 xl:ms-0">
                  <p className="text-base xl:text-lg font-semibold text-white1">
                    {obj.Form}
                  </p>
                  <div className="flex items-center rounded-lg border border-dashed border-graytransparent bg-gray2 backdrop-blur-6 mt-3 gap-3 cursor-pointer py-3 justify-center w-[264px] md:w-[312px]">
                    {obj.icon}
                    <p className="mb-0 text-xs md:text-sm font-light text-white1">
                      {obj.Text}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-8 md:mt-0 md:items-center gap-4 lg:gap-6 ">
                  <button
                    className={`common_btn py-3 lg:py-4 px-8  text-xs lg:text-sm lg:px-[53px] ${obj.btnColor}`}
                  >
                    {obj.upload}
                  </button>
                  <button className="text-sm font-medium text-white1 transition-all ease-in-out duration-300 hover:border-transparent hover:border hover:bg-bluedark py-3 lg:py-4 px-7  md:px-8 lg:px-[52px]  rounded-lg border border-white1">
                    {obj.verify}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default MapCards;
