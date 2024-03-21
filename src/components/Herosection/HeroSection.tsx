import { Banner } from "./Banner"
import { useRecoilState } from "recoil";
import { searchInputState , jobSearchResult } from "@/state/state";
import { useEffect } from "react";

export const HeroSection = ()=>{
    const [input , setInput] = useRecoilState(searchInputState); // setting the filter string
    const [filterList , setFilterList] = useRecoilState(jobSearchResult); // setting the filterd list got from API
    useEffect(()=>{
        fetch(`https://rest-api-lakshay.vercel.app/jobs?filter=${input}`).then(async(res)=>{
            const response = await res.json();
            setFilterList(response.data);
        })
    },[input , setFilterList])
    return(

        // contains the search box
        <div className=" -z-10 lg:w-4/5 w-full mx-auto flex flex-col items-center px-10 mt-10 gap-5 h-model" >
            <Banner/>
            <input onChange={(e)=>{
                setFilterList([]);
                return setInput(e.target.value)
            }} className="relative -top-10 bg-slate-100 lg:w-3/5 sm:w-3/5 w-5/6 sm:text-md text-xs mx-auto p-3 rounded-3xl " placeholder="Job title, keyword or company" />
            <div>
                <h1 className=" text-center relative -top-10 sm:text-sm text-xs  text-grey" >You can also <span className="font-bold text-black" > Post a job </span> or <span className="font-bold text-black" >Post your resume</span></h1>
            </div>
        </div>
    )
}