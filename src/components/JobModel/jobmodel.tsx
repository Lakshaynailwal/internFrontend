import { jobId , jobSearchResult } from "@/state/state"
import { useRecoilValue } from "recoil"
import { Job } from "@/interface/interface";
import { ModelSet } from "./jobSelect";
import { jobModelState } from "@/state/state";

export const JobModel = ()=>{
    const jobid : string = useRecoilValue(jobId);
    const job  = useRecoilValue(jobSearchResult).find((item : Job)=>{
        return item._id.toString() === jobid ? item : null;
    })
    const modelFlag = useRecoilValue(jobModelState);
    return (
        <>
        {job != undefined && modelFlag && <ModelSet jobitem = {job}/>}
        </>
    )
}


