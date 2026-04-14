import AllTimelineEntry from "@/components/timelinePage/AllTimelineEntry";

const TimelinePage = () => {
  return (
    <div className="max-w-325  w-[95%] sm:w-10/12 mx-auto my-10">
      <h1 className="text-4xl font-bold text-[#1F2937]">Timeline</h1>
      <div className="max-w-70 mt-5">
        <select className="w-full pl-4 pr-10 py-2 text-sm text-gray-400 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer">
          <option>Filter timeline</option>
          <option>All Activities</option>
          <option>Meetups</option>
          <option>Calls</option>
        </select>
      </div>
      <AllTimelineEntry></AllTimelineEntry>

    </div>
  );
};

export default TimelinePage;
