"use client";
import { TimelineContext } from "@/context/timelineContext";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const StatsPage = () => {
  const { timeline } = useContext(TimelineContext);
  let text = 0;
  let call = 0;
  let video = 0;
  timeline.forEach((element) => {
    if (element.text === "Text") {
      text += 1;
    }
    if (element.text === "Call") {
      call += 1;
    }
    if (element.text === "Video") {
      video += 1;
    }
  });
  const data = [
    { name: "Call", value: call, fill: "#0088FE" },
    { name: "Text", value: text, fill: "#00C49F" },
    { name: "Video", value: video, fill: "#FFBB28" },
  ];
  return (
    <div className="max-w-325  w-[95%] sm:w-10/12 mx-auto my-15">
      <h1 className="text-5xl font-bold text-[#244D3F] mb-10">
        Friendship Analytics
      </h1>
      <div className="bg-white shadow-sm rounded-2xl p-5">
        <h2 className="text-xl font-medium text-[#244D3F]">
          By Interaction Type
        </h2>
        <div className="flex justify-center items-center">
          {timeline.length === 0 ? (
            <p className="font-semibold text-xl text-gray-400">No interaction logged yet</p>
          ) : (
            <PieChart
              style={{
                width: "100%",
                maxWidth: "300px",
                maxHeight: "60vh",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend></Legend>
              <Tooltip></Tooltip>
            </PieChart>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
