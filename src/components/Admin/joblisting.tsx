"use client "
import { useEffect ,useState } from "react"
import { AdminJobBox } from "./adminJobbox"
import { useRecoilState, useRecoilValue } from "recoil"
import { jobSearchResult , searchInputState, TotelCountState, updatedState } from "@/state/state"
import { Job } from "@/interface/interface"
import { UpdateFlagModel } from "./update/updateFlagModel"
import { Skeleton } from "../skeleton/skeleton"
import { URL } from "@/StaticData/utils"

export const Joblist = ()=>{
    // mainting the controllers for pagination
    const [next, setNext] = useState(false);
    const [prev, setPrev] = useState(false);
    const [page , setPage] = useState(1);
    const [total , setTotal] = useRecoilState(TotelCountState);
    const upState = useRecoilValue(updatedState)
    //setting the list of jobs got from api
    const [joblist , setJobList] = useRecoilState(jobSearchResult);
    // filtering the data
    const filter = useRecoilValue(searchInputState)
    const [length , setLength] = useState(0);
    // refetching when anything in dependency array changes
    useEffect(()=>{
      fetch(`${URL}/jobs?page=${page}&filter=${filter}`).then(async(res)=>{
        const response = await res.json();
        setJobList(response.data);
        setNext(response.isNext);
        setPrev(response.isPrev);
        setTotal(response.total);
        setLength(response.length);
      })
    },[page, upState , filter ,setJobList , setTotal])

    return(
        <div className="sm:w-4/5 w-full  px-7 md:py-7 mx-auto  gap-5 flex flex-col">
          
          {/* pagination controls */}
        <div className="flex gap-2">
            <button onClick={()=>{
              return prev ? setPage((p):number=>{
                setLength(0);
                return p>0 ? p-1 : 1;
              }) : null
            }} className="bg-slate-200 p-1 w-16 rounded-xl">Prev</button>
            <p className=" text-center bg-slate-100 w-20 border-2 rounded-md"> {page} / {Math.ceil(total/6)>0 ? Math.ceil(total/6) : 1}</p>
            <button onClick={()=>{
              return next ? setPage((p):number=>{
                setLength(0);
                return p < Math.ceil(total/6) ? p+1 : p;
              }) : null}} className="bg-slate-200 p-1 w-16 rounded-xl" >Next</button>
        </div>
          
          <div className="flex flex-wrap lg:gap-5 gap-3">
            {/* rendering the adminJobbox by mapping over every item in joblist */}
            {
              (length != 0 || total == 0 )? 
                joblist.map((job : Job)=>{
                  return <AdminJobBox key={job._id} jobDesc={job}/>
                })
              : <Skeleton/>
            }
          </div>
        
        {/* setting modal for updating the job profile */}
        <UpdateFlagModel/>
    </div>
    )
}
