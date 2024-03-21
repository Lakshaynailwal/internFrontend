"use client "
import { useEffect ,useState } from "react"
import { JobBox } from "./jobbox"
import { useRecoilState, useRecoilValue } from "recoil"
import { jobSearchResult , searchInputState, TotelCountState } from "@/state/state"
import { Job } from "@/interface/interface"
import { Skeleton } from "../skeleton/skeleton"

export const JobResultSection = ()=>{

    const [joblist , setJobList] = useRecoilState(jobSearchResult); // setting the fetched data of jobs
    // pagination controllers
    const [next, setNext] = useState(false); // tells next available or not
    const [prev, setPrev] = useState(false); // tells prev available or not
    const [page , setPage] = useState(1); // set the page no to fetch data from backend
    const [total , setTotal] = useRecoilState(TotelCountState);

    const input = useRecoilValue(searchInputState) // setting filtering string

    //getting record initially and then refetching based on dependency array
    useEffect(()=>{
      fetch(`https://rest-api-lakshay.vercel.app/jobs?page=${page}`).then(async(res)=>{
        const response = await res.json();
        setJobList(response.data);
        setNext(response.isNext);
        setPrev(response.isPrev);
        setTotal(response.total);
      })
    },[page ,setJobList , setTotal])

    return(
        <div className="w-4/5 mb-3 px-7 md:py-7 md:mt-0 mt-5 md:p-0 md:w-3/5 mx-auto  gap-5 flex flex-col">
        {
          input && <h1 className="text-base">Showing results for {input}</h1>
        }
        <h1 className="text-base">Recommend for you</h1>
        <div className="flex flex-col  min-h-[50vh] gap-5">
        {/* pagination controls */}
        <div className="flex gap-2">
          {/* prev control */}
            <button onClick={()=>{
              
              return prev ? setPage((p):number=>{
                setJobList([])
                return p>0 ? p-1 : p;
              }) : null
            }} className="bg-slate-200 p-1 w-16 rounded-xl">Prev</button>
            {/* just showing the current page */}
            <p className=" text-center bg-slate-100 w-16 border-2 rounded-md"> {page}/{Math.ceil(total/6)} </p>
            {/* next control */}
            <button onClick={()=>{
              return next ? setPage((p):number=>{
                setJobList([])
                return p < Math.ceil(total/6) ? p+1 : p;
              }) : null}} className="bg-slate-200 p-1 w-16 rounded-xl" >Next</button>
        </div>
        <div className="flex w-full  flex-wrap lg:gap-5 gap-3">
          {/* mapping over the whole joblist and then rendering jobBox element */}
          {joblist.length > 0 ? 
            joblist.map((job : Job)=>{
              return <JobBox key={job._id} jobDesc={job}/>
            })
          :
            <Skeleton/>
          }
        </div>
        </div>
    </div>
    )
}