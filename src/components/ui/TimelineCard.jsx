import Image from "next/image";
import React from "react";
import textImg from "@/assets/images/text.png";
import videoImg from "@/assets/images/video.png";
import callImg from "@/assets/images/call.png";

const TimelineCard = ({item}) => {
  return (
    <div className="py-5 px-3 bg-white mb-5 flex justify-start items-center gap-4 shadow-sm rounded-2xl">
      <Image src={item.text === "Text"? textImg : item.text === "Call" ? callImg : videoImg} alt={`${item.text} logo`} height={30} width={30}></Image>
      <div>
        <p className="text-gray-600 text-lg"><span className=" text-[#244D3F] font-semibold">{item.text}</span> with {item.name}</p>
        <p className="text-gray-600">{item.date}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
