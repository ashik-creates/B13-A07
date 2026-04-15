"use client";
import { TimelineContext } from "@/context/timelineContext";
import { useContext, useState } from "react";
import TimelineCard from "../ui/TimelineCard";

const AllTimelineEntry = () => {
  const { timeline } = useContext(TimelineContext);
  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterValue(value);
  };
  const handleSort = (e) => {
    const value = e.target.value;
    setSortValue(value);
  };

  const filteredArray = () => {
    const filteredTimeline = [...timeline];
    if (
      filterValue === "Call" ||
      filterValue === "Text" ||
      filterValue === "Video"
    ) {
      return filteredTimeline.filter((item) => item.text === filterValue);
    }
    return filteredTimeline;
  };

  const sortedArray = () => {
    const sortedTimeline = filteredArray();

    if (sortValue === "newest") {
      return sortedTimeline.sort((a, b) => b.time - a.time);
    } else if (sortValue === "oldest") {
      return sortedTimeline.sort((a, b) => a.time - b.time);
    }

    return sortedTimeline;
  };
  console.log(sortValue);
  return (
    <>
      <div className="flex justify-start items-center gap-2 flex-wrap">
        <div className="max-w-70 mt-5">
          <select defaultValue=""
            onChange={handleFilter}
            className="w-full pl-4 pr-20 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer"
          >
            <option disabled hidden>Filter timeline</option>
            <option value="All">All</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>
        <div className="max-w-70 mt-5">
          <select defaultValue=""
            onChange={handleSort}
            className="w-full pl-4 pr-10 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer"
          >
            <option disabled hidden>Sort By</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="mt-10">
        {sortedArray().length === 0 ? (
          <p className="text-center bg-white p-7 shadow-sm rounded-xl  text-2xl font-semibold text-gray-400">
            Timeline is empty
          </p>
        ) : (
          sortedArray().map((item, ind) => (
            <TimelineCard key={ind} item={item}></TimelineCard>
          ))
        )}
      </div>
    </>
  );
};

export default AllTimelineEntry;
