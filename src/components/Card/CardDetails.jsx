import React, { useEffect, useState } from "react";
import Attachments from "./Attachments";
import ButtonsChat from "./ButtonsChat";
import { cards } from "../constants";

function CardDetails({ headerId, setCardCount, showAll, toggleCards }) {
  let [newCard, setNewCard] = useState([]);
  useEffect(() => {
    let headerCards = cards.filter((item) => item.headerType === headerId);
    setNewCard(headerCards);
    setCardCount((cc) => ({
      ...cc,
      [headerId]: headerCards.length,
    }));
  }, [headerId, showAll]);

  return (
    <div className="relative ms-0 md:ms-5">
      {newCard.slice(0, showAll ? newCard.length : 1).map((card, index) => (
        <div
          className={`max-w-[671px] w-full  px-[9px] py-3  bg-white rounded-[10px] shadow justify-start items-end gap-3.5 inline-flex my-4 ${
            !showAll && newCard.length > 1
              ? "one_card-shadow"
              : "border border-gray-300"
          } `}
          key={index}
          onClick={toggleCards}
        >
          <div className="flex-col justify-end items-start gap-3.5 inline-flex flex-wrap">
            <div className=" w-full flex flex-wrap justify-between items-center ">
              <div className="text-black text-sm font-medium">
                {card.cardHeading}
              </div>
              {showAll && card.cardHeading ? (
                <span className=" w-[30px] h-[30px] p-2  justify-center items-center gap-0.5 flex text-slate-400">
                  X
                </span>
              ) : (
                ""
              )}
            </div>
            <div>
              <span className="text-blue-600 text-sm font-normal">
                {card.name}
              </span>
              <span className="text-gray-500 text-sm font-normal">
                {" "}
                {card.cardIssue}
              </span>
            </div>
            <div className="text-gray-500 text-sm font-normal">
              {card.cardDesc}{" "}
            </div>
            {card.attachments ? (
              <>
                {" "}
                <div className="w-full flex flex-wrap justify-between items-center">
                  <Attachments />
                  <span className="text-blue-600 text-sm font-normal">
                    Read more
                  </span>
                </div>
              </>
            ) : (
              <>
                {card.buttons ? (
                  <>
                    <ButtonsChat />
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardDetails;
