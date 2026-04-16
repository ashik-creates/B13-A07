import CheckInBtn from "@/components/FriendDetailsPage/CheckInBtn";
import RightSide from "@/components/FriendDetailsPage/RightSide";
import BannerCard from "@/components/ui/BannerCard";
import getFriends from "@/utils/getFriends";
import React from "react";
import { LuMessageSquareText, LuPhone, LuVideo } from "react-icons/lu";

const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;
  const friends = await getFriends();
  const friend = friends.find((fd) => fd.id === Number(id));

  const rightTopCardItems = [
    {
      num: friend.days_since_contact,
      text: "Days Since Contact",
    },
    {
      num: friend.goal,
      text: "Goal (Days)",
    },
    {
      num: friend.next_due_date,
      text: "Next Due",
    },
  ];

  const checkInOptions = [
    { label: "Call", icon: <LuPhone /> },
    { label: "Text", icon: <LuMessageSquareText /> },
    { label: "Video", icon: <LuVideo /> },
  ];

  return (
    <div className="max-w-325  w-[95%] sm:w-10/12 mx-auto grid lg:grid-cols-3 my-10 gap-5">
      <div className="lg:col-span-1">
        <RightSide friend={friend}></RightSide>
      </div>
      <div className="lg:col-span-2">
        <div className="grid sm:grid-cols-3 gap-3">
          {rightTopCardItems.map((item, ind) => (
            <BannerCard key={ind} num={item.num} text={item.text}></BannerCard>
          ))}
        </div>
        <div className="p-4 sm:p-6 shadow-sm bg-white rounded-xl mt-5 flex flex-col min-[400px]:flex-row justify-between gap-5">
          <div className="space-y-7">
            <h2 className="text-[#2d4a43] font-bold text-center min-[400px]:text-start">Relationship Goal</h2>

            <p className="text-gray-500 text-center min-[400px]:text-start">
              Connect every{" "}
              <span className="font-bold text-slate-800">
                {friend.goal} days
              </span>
            </p>
          </div>
          <button className="btn">Edit</button>
        </div>
        <div className="space-y-4 mt-6 p-5 shadow-sm bg-white rounded-2xl">
          <h2 className="text-[#2d4a43] font-bold text-lg">Quick Check-In</h2>

          <div className="grid min-[450px]:grid-cols-3 gap-4 ">
            {checkInOptions.map((item, ind) => (
              <CheckInBtn key={ind} item={item} friend={friend}></CheckInBtn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
