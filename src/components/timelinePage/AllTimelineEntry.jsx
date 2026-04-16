"use client";
import { TimelineContext } from "@/context/timelineContext";
import { useContext, useState } from "react";
import TimelineCard from "../ui/TimelineCard";

const AllTimelineEntry = () => {
  const { timeline } = useContext(TimelineContext);
  const [filterValue, setFilterValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [sortValue, setSortValue] = useState("");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterValue(value);
  };
  const handleSort = (e) => {
    const value = e.target.value;
    setSortValue(value);
  };

  const filteredTimeline = timeline.filter((item) => {
    const searchLower = searchValue.toLocaleLowerCase();
    const searchedArray =
      item.text.toLowerCase().includes(searchLower) ||
      item.name.toLowerCase().includes(searchLower);
    if (!searchedArray) {
      return false;
    } else {
      if (
        filterValue === "Call" ||
        filterValue === "Text" ||
        filterValue === "Video"
      ) {
        return item.text === filterValue;
      } else {
        return true;
      }
    }
  });

  const displaySortedOrFilteredTimeline = [...filteredTimeline].sort((a,b)=>{
    if (sortValue === "newest"){
      return b.time - a.time;
    }
    else if(sortValue === "oldest"){
      return a.time - b.time;
    }
    return 0;
  })

  return (
    <>
      <div className="flex justify-start items-center gap-4 flex-wrap mt-5">
        <div className="max-w-70 ">
          <select
            defaultValue=""
            onChange={handleFilter}
            className="w-full pl-4 pr-20 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer"
          >
            <option className="text-gray-400" value="" disabled >Filter timeline</option>
            <option value="All">All</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>
        <div className="max-w-70 ">
          <select
            defaultValue=""
            onChange={handleSort}
            className="w-full pl-4 pr-10 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer"
          >
            <option className="text-gray-400" value="" disabled >
              Sort By
            </option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <div className="flex justify-center items-center">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search interactions..."
            className="w-full px-4 py-1.5 bg-white border border-gray-300 
            rounded-lg rounded-r-0"
          />
        </div>
      </div>
      <div className="mt-10">
        {displaySortedOrFilteredTimeline.length === 0 ? (
          <p className="text-center bg-white p-7 shadow-sm rounded-xl  text-2xl font-semibold text-gray-400">
            Timeline is empty
          </p>
        ) : (
          displaySortedOrFilteredTimeline.map((item, ind) => (
            <TimelineCard key={ind} item={item}></TimelineCard>
          ))
        )}
      </div>
    </>
  );
};

export default AllTimelineEntry;
