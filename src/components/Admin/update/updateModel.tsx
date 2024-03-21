import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { AdminjobModelState, jobId, jobSearchResult } from "@/state/state";
import { Job } from "@/interface/interface";

export const UpdateModel: React.FC<{jobitem : Job}> = ({jobitem})=>{
    // trigger the display of modal
    const [model , setModel] = useRecoilState(AdminjobModelState);
    
    // updating the job profile content
    const [title , setTitle] = useState(jobitem.title);
    const [company , setCompany] = useState(jobitem.company);
    const [description , setDescription] = useState(jobitem.description.toString());
    const [location , setLocation] = useState(jobitem.location);
    const [stipend , setStipend] = useState(jobitem.stipend);
    const [jobIcon , setJobIcon] = useState(jobitem.jobIcon.toString());
    
    const classes = "bg-slate-100 md:text-base text-xs w-full mx-auto p-2 rounded-xl text-grey font-bold"
    
    return(
        <div className="fixed flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-op">
            <div className="lg:w-1/2 w-3/4 min-h-model border flex flex-col justify-between p-7 gap-4 bg-white" >
            
            {/* button for closing the modal */}
            <div onClick={()=>{setModel(p=>!p);}} className="text-3xl cursor-pointer">X</div>
                {/* form for updating the fields */}
                <form className="flex flex-col gap-3 md:w-4/5 w-full">
                <input value={title} onChange={(e)=>{setTitle(e.target.value)}}  required className={classes} type="text" placeholder="Title"  name="title" />
                    <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}}  required rows={10} className={classes} placeholder="Description"  name="description" />
                    <input value={location} onChange={(e)=>{setLocation(e.target.value)}}  required  className={classes} type="text" placeholder="Location"  name="location" />
                    <input value={company} onChange={(e)=>{setCompany(e.target.value)}}  required className={classes} type="text" placeholder="Company"  name="company" />
                    <input value={jobIcon} onChange={(e)=>{setJobIcon(e.target.value)}} className={classes} type="text" placeholder="Logo Link (Optional)"  name="icon" />
                    <input  onChange={(e)=>{setStipend(parseInt(e.target.value))}}  required className={classes} type="number" placeholder="Stipend"  name="stipend" />
                    <button onClick={(e)=>{
                        // preventing the default behaviour
                        e.preventDefault()

                        // send the update req to the API
                        fetch("https://rest-api-lakshay.vercel.app/admin/update",{
                            method:'POST',
                            headers:{'Content-Type' : 'application/json'},
                            body:JSON.stringify({
                                _id:jobitem._id,title,description,location,company,stipend,jobIcon
                            })
                        }).then(async(res)=>{
                            const response = await res.json();
                            setModel(p=>!p);
                            // alerting the user
                            alert(response.msg)
                        })
                    }}  className="p-2 bg-black text-white md:text-base text-xs font-bold w-44 rounded-xl ">Update</button>
                </form>
          
            </div>
        </div>
    )
}