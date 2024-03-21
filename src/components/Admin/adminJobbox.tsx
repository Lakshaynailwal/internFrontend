import { Job } from "@/interface/interface";
import { useRecoilState } from "recoil";
import { AdminjobModelState , jobId, jobSearchResult } from "@/state/state";
import Image from "next/image";

export const AdminJobBox:React.FC<{jobDesc:Job}> = ({jobDesc})=>{

    //setting the flag for display of job update modal
    const [modelFlag , setModelFlag] = useRecoilState(AdminjobModelState);
    // setting the current job id
    const [jobid , setJobid] = useRecoilState(jobId);
    // setting new records of available jobs based on filters
    const [newjobList , setNewJobList] = useRecoilState(jobSearchResult);
    
    //rendering the job profile
    return(
        <div  className="border shadow-jobBox rounded-xl min-h-32 p-5 sm:w-72 w-60 flex flex-col h-auto gap-5">
            <Image className=" object-contain rounded-full" alt="" src="/logo.webp" width={40} height={40} />
            <div className="flex flex-col ">
                <h1 className="font-bold md:text-base text-md">{jobDesc.title}</h1>
                <h2 className="text-grey text-md">{jobDesc.location} . {jobDesc.company}</h2>
            </div>
            <button className=" w-2/5 font-bold text-start rounded-xl" >${jobDesc.stipend}</button>
            <div className="flex gap-2 items-center">
                <Image onClick={()=>{
                setModelFlag(p=>!p);
                setJobid(jobDesc._id);
            }} src="/update.png" alt="" width={30} height={30}/>
                <Image onClick={()=>{
                    
                    // removing from current list
                    const newList = newjobList.filter((item:Job)=>{
                        item._id != jobDesc._id
                    })
                    // sending a delete req to api  
                    fetch("https://rest-api-lakshay.vercel.app/admin/delete",{
                        method:'POST',
                        headers: {'Content-Type' : 'application/json'},
                        body: JSON.stringify({_id : jobDesc._id})
                    }).then(async(res)=>{
                        const response = await res.json();
                        setNewJobList(newList)
                        // alerting the user
                        alert(response.msg);
                    })

            }} src="/delete.png" alt="" width={30} height={30} />
            </div>
        </div>
    )
}