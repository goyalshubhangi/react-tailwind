import React, { useState } from "react";
import arrowup from "../assets/images/arrow-up.svg";
import Header from "./Card/Header";

function Timeline({ activeTab }) {
  const [isDataFound, setIsDataFound] = useState(true);
  return (
    <>
      {isDataFound && (
        <>
          <div className="flex align-middle justify-between my-[30px] ">
            <div className="w-[684px] text-black text-base font-medium">
              Today
            </div>
            <div className="w-7 h-7 p-1 md:p-2 rounded-[100px] border border-gray-300 justify-start items-center gap-0.5 inline-flex ">
              <img src={arrowup} alt="arrow-up" />
            </div>
          </div>
        </>
      )}
      <div className=" w-full border-1 border-l border-gray-300 ms-3">
        <div className="ms-4">
          <Header
            activeTab={activeTab}
            isDataFound={isDataFound}
            setIsDataFound={setIsDataFound}
          />
        </div>
      </div>
      {isDataFound && (
        <>
          {" "}
          <div className="flex align-middle justify-between my-[30px]">
            <div className="w-[684px] text-black text-base font-medium">
              Yesterday
            </div>

            <div className="w-7 h-7 p-1 md:p-2 rounded-[100px] border border-gray-300 justify-start items-center gap-0.5 inline-flex">
              <img src={arrowup} alt="arrow-up" />
            </div>
          </div>
          {activeTab === "tickets" && (
            <div className=" w-full border-1 border-l border-gray-300 ms-3">
              <div className="ms-4">
                <Header
                  activeTab={activeTab}
                  isDataFound={isDataFound}
                  setIsDataFound={setIsDataFound}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Timeline;
