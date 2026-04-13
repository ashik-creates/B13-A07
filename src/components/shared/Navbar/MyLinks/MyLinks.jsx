"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyLinks = ({href, text, icon}) => {
    const pathName = usePathname();
    return (
        <Link href={href}>
             <button className={`${pathName === href ? "btn bg-[#244D3F] text-white": "btn text-[#244D3F] border-0"}`}><span>{icon}</span><span>{text}</span></button>
        </Link>
    );
};

export default MyLinks;