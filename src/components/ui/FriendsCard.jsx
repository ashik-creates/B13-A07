import Image from "next/image";

const FriendsCard = ({friend}) => {
    return (
        <div className="py-10 px-5 w-full shadow-sm rounded-2xl bg-white">
            <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full mx-auto">
                    <Image src={friend.picture} alt={`Portrait of ${friend.name}`} width={64} height={64} className="w-full h-full rounded-full object-cover"></Image>
                </div>
                <h1 className="text-xl font-semibold">
                    {friend.name}
                </h1>
                <p>
                    {friend.days_since_contact}d ago
                </p>
                <div className="flex justify-center items-center gap-2 flex-wrap">
                    {friend.tags.map((item, ind)=> <span className="badge text-green-500 bg-green-100 rounded-3xl font-medium" key={ind}>{item.toUpperCase()}</span>)}
                </div>
                <span className={`capitalize ${friend.status === "overdue" ? "badge text-white bg-red-600 rounded-3xl" : friend.status === "almost due"? "badge text-white bg-yellow-600 rounded-3xl": "badge text-white bg-green-600 rounded-3xl" }`}>
                    {friend.status}
                </span>
            </div>
            
        </div>
    );
};

export default FriendsCard;