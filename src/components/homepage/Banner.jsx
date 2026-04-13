import React from "react";
import { FiPlus } from "react-icons/fi";
import BannerCard from "../ui/BannerCard";

const Banner = () => {
    const bannerCardItems = [
        {
            num: "10",
            text: "Total Friends"
        },
        {
            num: "3",
            text: "On Track"
        },
        {
            num: "6",
            text: "Need Attention"
        },
        {
            num: "12",
            text: "Interactions This Month"
        },
    ]
  return (
    <div className="max-w-325  w-[95%] sm:w-10/12 mx-auto pt-20 border-b border-gray-200 pb-10">
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-[#1F2937] text-center">Friends to keep close in your life</h2>
        <p className="text-gray-500 w-[80%] sm:w-full">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-[#244D3F] text-white">
           <FiPlus></FiPlus> Add a Friend
        </button>
      </div>
      <div className="grid min-[500px]:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        {bannerCardItems.map((item,ind) => <BannerCard key={ind} text={item.text} num={item.num}></BannerCard>)}
      </div>
    </div>
  );
};

export default Banner;
