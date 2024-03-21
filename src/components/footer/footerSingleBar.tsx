import React from "react"

interface FooterSingleBarProps {
    id:number;
    title : string;
    arr : string[];
}
// just to show a single bar of footer element
export const FooterSingleBar : React.FC<{list : FooterSingleBarProps}> = ({list})=>{
    return(
        <div className="sm:w-48 w-36 flex flex-col gap-2">
            <h1 className=" text-sm sm:text-base font-bold">{list.title}</h1>
            {list.arr.map((z : string)=>{
                return <h1 className="text-sm sm:text-base text-lightgrey font-medium" key={z} >{z}</h1>
            })}
        </div>
    )
}