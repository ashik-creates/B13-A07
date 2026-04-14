import AllTimelineEntry from "@/components/timelinePage/AllTimelineEntry";

const TimelinePage = () => {
  return (
    <div className="max-w-325  w-[95%] sm:w-10/12 mx-auto my-10">
      <h1 className="text-4xl font-bold text-[#1F2937]">Timeline</h1>
      
      <AllTimelineEntry></AllTimelineEntry>

    </div>
  );
};

export default TimelinePage;
