"use client"
import { Sidebar } from "@/components/Admin/adminSidebar"
import { Joblist } from "@/components/Admin/joblisting";
import { Suspense, useEffect, useState } from "react"
import { RecoilRoot, useRecoilState } from "recoil";
import { jobSearchResult, searchInputState } from "@/state/state";
import { Skeleton } from "@/components/skeleton/skeleton";

export default function Page(){
    return(
        <RecoilRoot>
            <Search/>
        </RecoilRoot>
    )
}

const Search = ()=>{
    const [input , setInput] = useRecoilState(searchInputState); //triggers fitered search

    return(
       
        <div className="flex min-h-screen min-w-screen border-b">
            <Sidebar/>
            <div className="pb-4 pt-10 flex flex-col md:mx-auto w-full gap-5">
                <div className="flex flex-col gap-5 w-full items-center  " >
                    {/* search bar */}
                    <input onChange={(e)=>{setInput(e.target.value)}} className="bg-slate-100 md:w-2/5 w-4/5 p-2 rounded-xl text-grey font-bold" placeholder="Search Here" />
                {input != "" ? <h1>Showing results for <span className="font-bold">{input}</span></h1> : "" }
                </div>
               <div className="w-full flex flex-wrap">
                {<Joblist/>}
               </div>

            </div>
        </div>
    )  
}