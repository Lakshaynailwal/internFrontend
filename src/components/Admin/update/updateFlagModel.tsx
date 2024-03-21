import { AdminjobModelState, jobId , jobSearchResult } from "@/state/state"
import { Job } from "@/interface/interface";
import { useRecoilValue } from "recoil"
import { UpdateModel } from "./updateModel";

export const UpdateFlagModel = ()=>{
    
    const jobID = useRecoilValue(jobId); //getting the current job id
    // filtering out the our current job profile
    const job  = useRecoilValue(jobSearchResult).find((item : Job)=>{
        return item._id.toString() === jobID ? item : null;
    })
    const model = useRecoilValue(AdminjobModelState);

    // rendering on the basis of modelFlag -> trigger the display of modal
    return (
        <>
            {job != undefined && model && <UpdateModel jobitem = {job}/>}
        </>
    )
}