import React, { useState } from "react";
import "./assets/main.css";
import Appheader from "./components/Appheader";
import Tabs from "./components/Tabs";
import Timeline from "./components/Timeline";

function App() {
  const [activeTab, setActiveTab] = useState("allActivities");

  return (
    <div className="max-w-[770px] mx-auto border p-4 md:p-7">
      <Appheader />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Timeline activeTab={activeTab} />
    </div>
  );
}
export default App;
