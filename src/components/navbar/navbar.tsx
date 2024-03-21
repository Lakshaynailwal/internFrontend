"use client"

import { navItem } from "@/StaticData/utils"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { NavHiddenComp } from "./navhiddencomp"

export const Navbar = ()=>{
    const [flag , setFlag] = useState(false); // use to trigger display ham icon
    const pathname = usePathname();  // to get the current path url
    const classes = " text-sm font-medium w-1/5" ;

    return (
        <div className="py-5 h-20">
            {/* navbar for big screens */}
            <nav className="w-4/5 mx-auto flex justify-between items-center">
                <div className="flex md:gap-7 gap-5 items-center">
                    <Link className="" href="/" ><Image className="rounded-full w-16 h-12" src="/logo.webp" alt="" width={50} height={50}/></Link>
                    <div className="sm:flex hidden md:gap-7 gap-5 items-center">
                    {/* mapping over the navitems*/}
                    {navItem.map((item : {
                        id:number;
                        path:string;
                        title:string;
                    })=>{
                        return <Link className={`${classes} ${pathname === item.path ? 'text-black font-extrabold' : 'text-grey'}`} key={item.id} href={item.path} >{item.title}</Link>
                    })}
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <Image className="w-6 h-6" src="/notification.png" alt="" width={30} height={30} />
                    <Image className="rounded-full object-cover" src="/profile-2.webp" alt="" width={30} height={30} />
                    <Image className="sm:hidden block" onClick={()=>{
                        setFlag((p)=>!p);
                    }} src="/ham.png" alt="" width={30} height={30}/>
                </div>
            </nav>

            {/* navbar for mobile view */}
            {flag && <div className="sm:hidden bg-white z-10 block absolute right-0 top-20 bottom-0 border w-3/5 transition-all ease-linear backdrop-blur-xl">
            <NavHiddenComp/>
            </div>}
        </div>
    )
}