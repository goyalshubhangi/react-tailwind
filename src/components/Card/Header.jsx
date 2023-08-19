import React, { useEffect, useState } from "react";
import CardButton from "./CardButton";
import CardDetails from "./CardDetails";
const headers = [
  {
    initials: "HA",
    name: "Honey ",
    desc: "updated the incident ticket #ASC1302",
    time: "30 min ago",
    type: ["allActivities", "tickets"],
    headerId: "headerTypeOne",
  },
  {
    initials: "JH",
    name: "Julien Herbst",
    desc: "tries connecting over Live chat",
    time: "30 min ago",
    type: ["allActivities"],
    headerId: "headerTypeTwo",
  },
  {
    initials: "UR",
    name: "Udaya Reddy ",
    desc: "resolved the incident ticket #ASC1314",
    time: "30 min ago",
    type: ["allActivities", "tickets"],
    headerId: "headerTypeThree",
  },
];
const initialCountState = {
  headerTypeOne: 0,
  headerTypeTwo: 0,
  headerTypeThree: 0,
};
function Header({ activeTab, isDataFound, setIsDataFound }) {
  const [newHeader, setNewHeader] = useState([]);
  const [cardCount, setCardCount] = useState(initialCountState);
  const [showAll, setShowAll] = useState({});

  const toggleCards = (headerId) => {
    setShowAll((prevShowAll) => ({
      ...prevShowAll,
      [headerId]: !prevShowAll[headerId],
    }));
  };
  useEffect(() => {
    let arr = headers.filter((item) => item.type.includes(activeTab));
    setNewHeader(arr);
    if (arr.length === 0) {
      setIsDataFound(false);
    } else {
      setIsDataFound(true);
    }
  }, [activeTab]);
  return (
    <>
      {newHeader.map((header, index) => (
        <>
          <div
            className="mx-w-[689px] w-full flex justify-between align-middle my-[20px]"
            key={index}
          >
            <div className="flex align-middle">
              <div className="w-[33px] h-[33px] pl-1.5 pr-1 pt-[9px] pb-2 bg-teal-400 rounded-[20px] justify-center items-center inline-flex me-5">
                <div className="text-center text-white text-base font-normal leading-none">
                  {header.initials}
                </div>
              </div>
              <div className="  flex-col justify-center items-start gap-[3px] inline-flex">
                <div>
                  <span className="text-blue-600 text-sm font-medium">
                    {header.name}
                  </span>
                  <span className="text-gray-500 text-sm font-normal">
                    {" "}
                    {header.desc}
                  </span>
                </div>
                <div className="text-gray-500 text-xs font-medium">
                  {header.time}
                </div>
              </div>
            </div>
            <CardButton
              cardCount={cardCount[header.headerId]}
              showAll={showAll[header.headerId]}
              toggleCards={() => toggleCards(header.headerId)}
            />
          </div>
          <CardDetails
            headerId={header.headerId}
            cardCount={cardCount[header.headerId]}
            setCardCount={setCardCount}
            showAll={showAll[header.headerId]}
            toggleCards={() => toggleCards(header.headerId)}
          />
        </>
      ))}
    </>
  );
}

export default Header;
