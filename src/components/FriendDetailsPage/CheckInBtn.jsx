"use client"
import { TimelineContext } from "@/context/timelineContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const CheckInBtn = ({item, friend}) => {
  const {timeline, setTimeline} = useContext(TimelineContext);

  const handleTimeline = (text)=> {
    const timelineObj = {
      id: friend.id,
      date: new Date().toLocaleDateString("en-us", {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      }),
      text: text,
      name: friend.name
    }
    setTimeline([...timeline, timelineObj])
    toast.success(`${text} with ${friend.name}`)
  }
    console.log(timeline);
  return (
    <button onClick={()=> handleTimeline(item.label)} className="btn w-full h-auto flex flex-col p-4 sm:p-6 bg-gray-100 shadow-sm rounded-2xl">
      <span className="text-2xl text-gray-500">{item.icon}</span>

      <p className="text-gray-500 font-medium">{item.label}</p>
    </button>
  );
};

export default CheckInBtn;
