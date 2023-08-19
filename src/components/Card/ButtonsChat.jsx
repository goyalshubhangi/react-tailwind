import React from "react";

function ButtonsChat() {
  return (
    <div>
      {" "}
      <div className="w-[229px] h-8 justify-start items-start gap-[19px] inline-flex">
        <div className="w-[92px] px-2 py-[7px] bg-blue-500 rounded-[5px] shadow justify-center items-center gap-0.5 flex">
          <div className="text-center text-white text-xs font-normal">
            Initiate Chat
          </div>
        </div>
        <div className="w-[118px] px-2 py-[7px] rounded-[5px] shadow border border-blue-500 justify-center items-center gap-0.5 flex">
          <div className="text-center text-blue-500 text-xs font-normal">
            Mark Addressed
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonsChat;
