
const getFriends = async() => {
    const res = await fetch("http://localhost:3000/friends.json" || "https://b13-a07.vercel.app/friends.json");
    const data = await res.json();

    return data;
};

export default getFriends;