import React, { useEffect, useState } from "react";
import Attachments from "./Attachments";
import ButtonsChat from "./ButtonsChat";

function CardDetails({ headerId, setCardCount, showAll, toggleCards }) {
  const cards = [
    {
      cardHeading: "Unable to send emails",
      name: "Honey Arora",
      cardIssue: " update the ticket #ASC 1304 with a public note",
      cardDesc:
        "Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you?",
      attachments: true,
      buttons: false,
      type: ["allActivities", "tickets"],
      headerType: "headerTypeOne",
    },
    {
      cardHeading: "Unable to send emails  two",
      name: "Honey Arora",
      cardIssue: " update the ticket #ASC 1304 with a public note",
      cardDesc:
        "Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you?",
      attachments: true,
      buttons: false,
      type: ["allActivities", "tickets"],
      headerType: "headerTypeOne",
    },
    {
      cardHeading: "Unable to send emails three",
      name: "Honey Arora",
      cardIssue: " update the ticket #ASC 1304 with a public note",
      cardDesc:
        "Microsoft has released new security patch  for the Email Server. We experience  some intermittent issues as the update was being done. Can you please check now if  it is working for you?",
      attachments: true,
      buttons: false,
      type: ["allActivities", "tickets"],
      headerType: "headerTypeOne",
    },
    {
      cardHeading: "Missed a Live chat",
      name: " Julien",
      cardIssue: " tired reaching the help-desk  for alive chat",
      cardDesc: "",
      attachments: false,
      buttons: true,
      type: ["allActivities"],
      headerType: "headerTypeTwo",
    },
    {
      cardHeading: "",
      name: "A 88, 2nd floor",
      cardIssue: " printer not working",
      cardDesc:
        "The device required a firmware upgrade. This has been fixed now. Please reach back in you face nay issue.Regards UB",
      attachments: false,
      buttons: false,
      type: ["tickets", "allActivities"],
      headerType: "headerTypeThree",
    },
    {
      cardHeading: "",
      name: "A 88, 2nd floor",
      cardIssue: " printer not working",
      cardDesc:
        "The device required a firmware upgrade. This has been fixed now. Please reach back in you face nay issue.Regards UB",
      attachments: false,
      buttons: false,
      type: ["tickets", "allActivities"],
      headerType: "headerTypeThree",
    },
    {
      cardHeading: "",
      name: "A 88, 2nd floor",
      cardIssue: " printer not working",
      cardDesc:
        "The device required a firmware upgrade. This has been fixed now. Please reach back in you face nay issue.Regards UB",
      attachments: false,
      buttons: false,
      type: ["tickets", "allActivities"],
      headerType: "headerTypeThree",
    },
  ];
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
    <div className="relative ">
      {newCard.slice(0, showAll ? newCard.length : 1).map((card, index) => (
        <div
          className={`max-w-[728px] w-full  px-[9px] py-3  bg-white rounded-[10px] shadow justify-start items-end gap-3.5 inline-flex my-4 ${
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
              {showAll && (
                <span className=" w-[30px] h-[30px] p-2  justify-center items-center gap-0.5 flex text-slate-400">
                  X
                </span>
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
