"use client"
import { navItem } from "@/StaticData/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const NavHiddenComp = ()=>{
    const pathname = usePathname(); // getting the current path url
    const classes = " text-sm font-medium w-1/5";
    return(
        <div>
            {/* navbar for mobile */}
            <div className="flex flex-col md:gap-7 gap-5 p-5">
                {/* mapping over nav items */}
                {navItem.map((item : {
                    id:number;
                    path:string;
                    title:string;
                })=>{
                    return <Link className={`${classes} ${pathname === item.path ? 'text-black font-extrabold' : 'text-grey'}`} key={item.id} href={item.path} >{item.title}</Link>
                })}
            </div>
        </div>
    )
}