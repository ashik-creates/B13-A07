"use client";
import { TimelineContext } from "@/context/timelineContext";
import { useContext, useState } from "react";
import TimelineCard from "../ui/TimelineCard";

const AllTimelineEntry = () => {
  const { timeline } = useContext(TimelineContext);
  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (e)=>{
    const value = e.target.value;
    setFilterValue(value);
  }

  const filteredArray = ()=>{
    const filteredTimeline = timeline;
    if(filterValue === "Call" || filterValue === "Text" || filterValue === "Video"){
        return filteredTimeline.filter(item=> item.text === filterValue);
    }
    return filteredTimeline;
  }
  return (
    <>
      <div className="max-w-70 mt-5">
        <select onChange={handleFilter} className="w-full pl-4 pr-10 py-2 text-sm text-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer">
          <option>Filter timeline</option>
          <option>Call</option>
          <option>Text</option>
          <option>Video</option>
        </select>
      </div>
      <div className="mt-10">
        {filteredArray().length === 0 ? (
          <p className="text-center bg-white p-7 shadow-sm rounded-xl  text-2xl font-semibold text-gray-400">Timeline is empty</p>
        ) : (
          filteredArray().map((item, ind) => (
            <TimelineCard key={ind} item={item}></TimelineCard>
          ))
        )}
      </div>
    </>
  );
};

export default AllTimelineEntry;
