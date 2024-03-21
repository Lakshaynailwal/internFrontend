"use client"
import { Sidebar } from "@/components/Admin/adminSidebar"
import { useState } from "react"

export default function Page(){

    // defining the inputs of form
    const [title , setTitle] = useState("");
    const [company , setCompany] = useState("");
    const [description , setDescription] = useState("");
    const [location , setLocation] = useState("");
    const [stipend , setStipend] = useState(0);
    const [jobIcon , setJobIcon] = useState("");

    const classes = "bg-slate-100 sm:text-md text-xs w-full mx-auto p-2 rounded-xl text-grey font-bold lg:text-base"
    
    return(
        <div className="flex min-h-screen border-b">
            <Sidebar/>
            <div className="pb-4  pt-10 flex flex-col md:mx-auto  w-4/5 md:w-2/5 gap-10">
               <form className="flex flex-col gap-3 md:w-full mx-auto w-4/5  " action="">
                    <input value={title} onChange={(e)=>{setTitle(e.target.value)}}  required className={classes} type="text" placeholder="Title"  name="title" />
                    <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}}  required rows={10} className={classes} placeholder="Description"  name="description" />
                    <input value={location} onChange={(e)=>{setLocation(e.target.value)}}  required  className={classes} type="text" placeholder="Location"  name="location" />
                    <input value={company} onChange={(e)=>{setCompany(e.target.value)}}  required className={classes} type="text" placeholder="Company"  name="company" />
                    <input value={jobIcon} onChange={(e)=>{setJobIcon(e.target.value)}} className={classes} type="text" placeholder="Logo Link (Optional)"  name="icon" />
                    <input  onChange={(e)=>{setStipend(parseInt(e.target.value))}}  required className={classes} type="number" placeholder="Stipend"  name="stipend" />
                    <button onClick={(e)=>{
                        //preventing the default behaviour
                        e.preventDefault()
                        //sending post req to api to add the job with content of form in body
                        fetch("https://rest-api-lakshay.vercel.app/admin/add",{
                            method:'POST',
                            headers:{'Content-Type' : 'application/json'},
                            body:JSON.stringify({
                                title,description,location,company,stipend,jobIcon
                            })
                        }).then(async(res)=>{
                            const response = await res.json();
                            // alerting the user
                            alert(response.msg);

                            // resetting the form
                            setTitle("");
                            setCompany("");
                            setDescription("");
                            setStipend(0);
                            setLocation("");
                        })

                    }}  className="p-2 bg-black text-white font-bold w-44 rounded-xl lg:text-base md:text-md text-xs">Submit</button>
               </form>
            </div>
        </div>
    )
}