import React from "react";
import direction from "../assets/images/left.svg";

function Appheader() {
  return (
    <>
      <div
        className=" py-[15px] justify-between items-start flex
      align-middle"
      >
        <div className="flex">
          <div className="w-6 h-6 relative me-2">
            <img src={direction} alt="back arrow" />
          </div>
          <div className="text-black text-base font-medium">Notification</div>
        </div>

        <div className="text-gray-500 text-xs font-medium">
          Mark all as read
        </div>
      </div>
    </>
  );
}

export default Appheader;
