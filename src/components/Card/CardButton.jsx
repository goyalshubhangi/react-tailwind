import React from "react";
import arrowdown from "../../assets/images/arrow-down.svg";
function CardButton({ cardCount, showAll, toggleCards }) {
  return (
    <div>
      <div className="w-[95px] h-[31px] p-2 rounded-[100px] border border-gray-300 justify-start items-center gap-0.5 inline-flex">
        <img src={arrowdown} alt={"arrow-down"} />
        <div className="text-gray-500 text-xs font-medium">
          <button onClick={toggleCards}>
            {showAll || cardCount === 1 ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
      {!showAll ||
        (cardCount >= 1 && (
          <div className=" justify-start items-center gap-[5px] inline-flex ms-3">
            <span className=" w-[30px] h-[30px] p-2 rounded-full border border-gray-300 justify-center items-center gap-0.5 flex text-slate-400">
              X
            </span>
          </div>
        ))}
    </div>
  );
}

export default CardButton;
