import MyLinks from "./MyLinks/MyLinks";
import { FiClock } from "react-icons/fi";
import { RiHome2Line } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
    const links = [
        {
            path: "/",
            text:"Home",
            icon:<RiHome2Line/>
        },
        {
            path: "/timeline",
            text:"Timeline",
            icon:<FiClock/>
        },
        {
            path: "/stats",
            text:"Stats",
            icon:<TfiStatsUp/>
        },
    ]
  return (
    <nav className=" px-8 py-4 bg-white border-b border-gray-100 shadow-sm">
      <div className="w-[95%] flex flex-col sm:flex-row gap-5 sm:gap-0 items-center justify-between">
        <h1 className="text-xl font-bold text-[#244D3F]">
          Keen<span className="text-gray-500">Keeper</span>
        </h1>

        <div className="flex flex-wrap justify-center item gap-2 sm:gap-1">
            {links.map((item,ind)=> <MyLinks key={ind} href={item.path} text={item.text} icon={item.icon}>
            </MyLinks>)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
