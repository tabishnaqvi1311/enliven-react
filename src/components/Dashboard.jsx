import { games } from "../constants";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { Circle } from "rc-progress";
const Dashboard = () => {
  const [tab, setTab] = useState("Child 1");
  const [startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const Children_Tab_Data = [
    {
      title: "Child 1",
      id: "Child 1",
      content: (
        <div className="flex items-center justify-center mt-10">
          <div
            className="flex flex-col items-center gap-3"
            style={{ margin: 20, width: 230, height: 230 }}>
            <Circle
              percent={50}
              strokeColor="#CAFF33"
              strokeWidth={4}
              trailColor="gray"
              trailWidth={4}
              strokeLinecap="sqaure"
            />
            <p className="text-xl font-bold">SpeakUp</p>
          </div>

          <div
            className="flex flex-col items-center gap-3"
            style={{ margin: 20, width: 230, height: 230 }}>
            <Circle
              percent={35}
              strokeColor="#CAFF33"
              strokeWidth={4}
              trailColor="gray"
              trailWidth={4}
              strokeLinecap="sqaure"
            />
            <p className="text-xl font-bold">The Zoo</p>
          </div>
        </div>
      ),
    },

    {
      title: "Child 2",
      id: "Child 2",
      content: (
        <div className="flex items-center justify-center mt-5">
          <div
            className="flex flex-col items-center gap-3"
            style={{ margin: 20, width: 230, height: 230 }}>
            <Circle
              percent={10}
              strokeColor="#CAFF33"
              strokeWidth={4}
              trailColor="gray"
              trailWidth={4}
              strokeLinecap="sqaure"
            />
            <p className="text-xl font-bold">SpeakUp</p>
          </div>

          <div
            className="flex flex-col items-center gap-3"
            style={{ margin: 20, width: 230, height: 230 }}>
            <Circle
              percent={25}
              strokeColor="#CAFF33"
              strokeWidth={4}
              trailColor="gray"
              trailWidth={4}
              strokeLinecap="sqaure"
            />
            <p className="text-xl font-bold">The Zoo</p>
          </div>
        </div>
      ),
    },

    {
      title: "Child 3",
      id: "Child 3",
      content: (
        <div className="flex items-center justify-center mt-5">
          <div
            className="flex flex-col items-center gap-3"
            style={{ margin: 20, width: 230, height: 230 }}>
            <Circle
              percent={15}
              strokeColor="#CAFF33"
              strokeWidth={4}
              trailColor="gray"
              trailWidth={4}
              strokeLinecap="sqaure"
            />
            <p className="text-xl font-bold">SpeakUp</p>
          </div>

          <div
            className="flex flex-col items-center gap-3"
            style={{ margin: 20, width: 230, height: 230 }}>
            <Circle
              percent={95}
              strokeColor="#CAFF33"
              strokeWidth={4}
              trailColor="gray"
              trailWidth={4}
              strokeLinecap="sqaure"
            />
            <p className="text-xl font-bold">The Zoo</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full p-3">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-start justify-start mt-3">
          <h3 className="text-primary">Dashboard</h3>
          <p className="text-lg">Welcome, Sairam</p>
        </div>

        <div className="flex items-center justify-center mt-10 ">
          <h3>Games</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-16 mt-10">
          {games.map((list, index) => (
            <div key={index} className="border-2 border-primary rounded-xl p-5">
              <div className="flex flex-col items-center gap-3">
                <img src={list.photo} className="w-[200px] h-[200px]" />
                <p className="text-xl font-bold">{list.label}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="mt-10" />

        <div className="flex items-center justify-center gap-5 mt-10">
          <TabButton
            selectTab={() => handleTabChange("Child 1")}
            active={tab === "Child 1"}>
            Child 1
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Child 2")}
            active={tab === "Child 2"}>
            Child 2
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Child 3")}
            active={tab === "Child 3"}>
            Child 3
          </TabButton>
        </div>
        <div>{Children_Tab_Data.find((t) => t.id === tab).content}</div>
      </div>
    </div>
  );
};

export default Dashboard;
