"use client"
import Link from "next/link";
import { adminSideItem } from "@/StaticData/utils";
import Image from "next/image";
import { useState } from "react";

// sidebar for admin panel
export const Sidebar = ()=>{
    const [flag , setFlag] = useState(true); //to trigger ham icon to display sidebar
    return(
        <>  
            <div className={` ${flag ? "w-60 backdrop-blur-md absolute h-screen" : "w-20 md:w-96 "} md:relative p-2 sm:p-7  flex flex-col  left-0 bg-white gap-5  border-r min-h-side`}>
            <Image onClick={()=>{setFlag(p=>!p)}} className={` md:hidden sm:w-7 sm:h-7 w-5`} src="/ham.png" alt="" width={40} height={40} />
                {/* {isLog ?  */}
                <div className={`${flag ? "flex flex-col" : "hidden"}   md:flex md:flex-col gap-2`} >
                    {adminSideItem.map((item :{
                        id:number;
                        path:string;
                        title:string;
                    })=>{
                        return <Link className="p-2 rounded-xl bg-slate-100 text-base font-medium" key={item.id} href={item.path}><button >{item.title}</button></Link>
                    })}
                {/* <button className=" backdrop-blur-md bg-orange-600 p-2 w-4/5 rounded-xl text-white font-medium">Logout</button> */}
                </div>
                {/* : <button className=" backdrop-blur-md bg-orange-600 p-2 w-4/5 rounded-xl text-white font-medium">Login</button>} */}
            </div>
        </>
    )
}