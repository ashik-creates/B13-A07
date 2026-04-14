import Image from "next/image";
import { LuAlarmClock, LuArchive, LuTrash2 } from "react-icons/lu";

const RightSide = ({friend}) => {
  return (
    <>
      <div className="py-10 px-5 w-full shadow-sm rounded-2xl bg-white">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-full mx-auto">
            <Image
              src={friend.picture}
              alt={`Portrait of ${friend.name}`}
              width={64}
              height={64}
              className="w-full h-full rounded-full object-cover"
            ></Image>
          </div>
          <h1 className="text-xl font-semibold">{friend.name}</h1>
          <span
            className={`capitalize ${friend.status === "overdue" ? "badge text-white bg-red-600 rounded-3xl" : friend.status === "almost due" ? "badge text-white bg-yellow-600 rounded-3xl" : "badge text-white bg-green-600 rounded-3xl"}`}
          >
            {friend.status}
          </span>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {friend.tags.map((item, ind) => (
              <span
                className="badge text-green-500 text-xs bg-green-100 rounded-3xl font-medium"
                key={ind}
              >
                {item.toUpperCase()}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-center">{friend.bio}</p>
        </div>
      </div>
      <div className="py-5 space-y-3">
        <button className="btn flex items-center justify-center gap-2 w-full bg-white rounded-lg text-gray-700 font-medium">
          <LuAlarmClock className="text-lg" />
          <span>Snooze 2 Weeks</span>
        </button>

        <button className="btn flex items-center justify-center gap-2 w-full bg-white  rounded-lg text-gray-700 font-medium ">
          <LuArchive className="text-lg" />
          <span>Archive</span>
        </button>

        <button className="btn flex items-center justify-center gap-2 w-full  bg-white rounded-lg text-red-500 font-medium">
          <LuTrash2 className="text-lg" />
          <span>Delete</span>
        </button>
      </div>
    </>
  );
};

export default RightSide;
