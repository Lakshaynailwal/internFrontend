import Image from "next/image"
import { useRecoilState, useRecoilValue } from "recoil"
import { jobId, jobModelState } from "@/state/state";
import React from "react";
import { Job } from "@/interface/interface";

// single box showing various fields
export const JobBox:React.FC<{jobDesc:Job}> = ({jobDesc})=>{
    const [modelFlag , setModelFlag] = useRecoilState(jobModelState); // triggred by clicking on box to show the job modal
    const [jobid , setJobid] = useRecoilState(jobId) // setting the current obj id for open this in modal
    return(
        <div onClick={()=>{
            setModelFlag(p=>!p);
            setJobid(jobDesc._id)
        }} className="border shadow-jobBox rounded-xl min-h-32 p-5 md:w-60 sm:w-2/5 w-60 flex flex-col h-auto gap-5">
            <Image className=" object-contain rounded-full" alt="" src="/logo.webp" width={40} height={40} />
            <div className="flex flex-col ">
                <h1 className="font-bold lg:text-sm text-xs">{jobDesc.title}</h1>
                <h2 className="text-lightgrey lg:text-sm text-xs">{jobDesc.location}| {jobDesc.company}</h2>
            </div>
            <button className=" md:w-2/5 w-3/5 text-xs p-1 font-bold bg-slate-100 rounded-xl" >${" "}{jobDesc.stipend}</button>
        </div>
    )
}