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
        <p><span className="text-lg text-[#244D3F] font-medium">{item.text}</span> with {item.name}</p>
        <p>{item.date}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
