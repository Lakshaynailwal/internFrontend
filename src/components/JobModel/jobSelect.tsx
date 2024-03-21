import { useRecoilState } from "recoil";
import { jobModelState } from "@/state/state";
import { Job } from "@/interface/interface";
import Image from "next/image";

export const ModelSet: React.FC<{jobitem : Job}> = ({jobitem})=>{
    const [model , setModel] = useRecoilState(jobModelState);
    return(
        <div className="fixed flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-op">
            <div className=" xl:w-1/3 md:w-1/2 w-3/4 min-h-model border flex flex-col justify-between p-7 bg-white" >
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                    <div className="flex sm:flex-row flex-col  gap-5 ">
                        <Image src={"/logo.webp"} alt="" width={40} height={30} />
                        <div className="flex flex-col ">
                            <h1 className="font-bold break-words text-wrap  text-lg ">{jobitem.title}</h1>
                            <h1 className="text-grey md:text-base break-words text-wrap text-sm ">{jobitem.location} and {jobitem.company} </h1>
                        </div>
                    </div>
                    <div>
                        <h1 className=" text-2xl hover:cursor-pointer" onClick={()=>{
                            setModel(p=>!p)
                        }} >X</h1>
                    </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold md:text-base text-[16px]">Description</p>
                        <p className="text-wrap break-words md:text-base text-[15px] ">{jobitem.description}</p>
                    </div>
                </div>
                <button className="text-base bg-orange-600 text-white p-1 rounded-xl w-2/6 mx-auto  " >Apply Now</button>
            </div>
        </div>
    )
}