"use client"
import { TimelineContext } from "@/context/timelineContext";
import { useContext } from "react";
import TimelineCard from "../ui/TimelineCard";

const AllTimelineEntry = () => {
    const {timeline} = useContext(TimelineContext);
    return (
        <div className="mt-10">
        {
            timeline.length === 0 ? <p>Timeline is empty</p> : timeline.map((item, ind)=> <TimelineCard key={ind} item={item}></TimelineCard>)
        }
      </div>
    );
};

export default AllTimelineEntry;