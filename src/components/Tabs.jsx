import React from "react";

function Tabs({ activeTab, setActiveTab }) {
  const handleTab = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="max-w-[836px] w-full  px-2 py-[5px] bg-zinc-100 rounded-[10px] flex-wrap flex-col justify-center items-start gap-2.5 inline-flex">
      <div className=" rounded-tl-sm rounded-tr-sm justify-start items-center gap-[9px] inline-flex">
        {/* <Activity activeTab={activeTab} count={count} title ={title}/> */}
        <div
          className={` px-0 md:px-[15px] py-2  rounded-[5px]  justify-start items-start gap-2.5 flex ${
            activeTab === "allActivities" ? "bg-white shadow" : ""
          }`}
          data-id={"allActivities"}
          onClick={() => {
            handleTab("allActivities");
          }}
        >
          <span className="text-slate-500 text-[13px] font-normal unselectable">
            All Activities
          </span>
        </div>
        <div
          className={` px-0 md:px-[15px] py-2  rounded-[5px]  justify-start items-center gap-2.5 flex align-middle ${
            activeTab === "tickets" ? "bg-white shadow" : ""
          }`}
          data-id={"tickets"}
          onClick={() => {
            handleTab("tickets");
          }}
        >
          <span className="text-slate-500 text-[13px] font-normal unselectable">
            Tickets
          </span>
          <div className="px:2 md:px-2.5 py-0.5 bg-gray-300 rounded-[10px] justify-center items-center flex ">
            <div className="text-center text-gray-500 text-xs font-medium leading-none">
              12
            </div>
          </div>
        </div>
        <div
          className={` px-0 md:px-[15px] py-2  rounded-[5px]  justify-start items-center gap-2.5 flex ${
            activeTab === "sla" ? "bg-white shadow" : ""
          }`}
          data-id={"sla"}
          onClick={() => {
            handleTab("sla");
          }}
        >
          <div className="text-slate-500 text-[13px] font-normal">SLA</div>
          <div className="px:2 md:px-2.5 py-0.5 bg-gray-300 rounded-[10px] justify-center items-center flex">
            <div className="text-center text-gray-500 text-xs font-medium leading-none">
              0
            </div>
          </div>
        </div>
        <div
          className={` px-0 md:px-[15px] py-2  rounded-[5px]  justify-start items-center gap-2.5 flex ${
            activeTab === "tasks" ? "bg-white shadow" : ""
          }`}
          data-id={"tasks"}
          onClick={() => {
            handleTab("tasks");
          }}
        >
          <div className="text-slate-500 text-[13px] font-normal">Tasks</div>
          <div className="px:2 md:px-2.5 py-0.5 bg-gray-300 rounded-[10px] justify-center items-center flex">
            <div className="text-center text-gray-500 text-xs font-medium leading-none">
              0
            </div>
          </div>
        </div>
        <div
          className={` px-0 md:px-[15px] py-2  rounded-[5px]  justify-start items-center gap-2.5 flex ${
            activeTab === "missedChat" ? "bg-white shadow" : ""
          }`}
          data-id={"missedChat"}
          onClick={() => {
            handleTab("missedChat");
          }}
        >
          <div className="text-slate-500 text-[13px] font-normal">
            Missed Chat
          </div>
          <div className="px:2 md:px-2.5 py-0.5 bg-gray-300 rounded-[10px] justify-center items-center flex">
            <div className="text-center text-gray-500 text-xs font-medium leading-none">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
