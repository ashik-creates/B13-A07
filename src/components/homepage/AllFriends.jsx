import getFriends from "@/utils/getFriends";
import FriendsCard from "../ui/FriendsCard";

const AllFriends = async () => {
  const friends = await getFriends();
  return (
    <div className="max-w-325  w-[95%] sm:w-10/12 mx-auto mt-10">
      <h2 className="text-[#1F2937] font-semibold text-2xl">Your Friends</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {friends.map(friend => <FriendsCard key={friend.id} friend={friend}></FriendsCard> )}
      </div>
    </div>
  );
};

export default AllFriends;
