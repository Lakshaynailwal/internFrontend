import { footerItem } from "@/StaticData/utils";
import { FooterSingleBar } from "./footerSingleBar";
import React from "react";

export const Footer : React.FC = ()=>{
    return(
        <div className="w-4/5 mx-auto flex flex-col min-h-60 gap-5 py-7">
            <div className="flex flex-wrap w-full  gap-4 justify-between ">
                {/* mapping over the static footer item */}
                {footerItem.map((item : {
                    id:number;
                    title : string;
                    arr : string[];
                })=>{
                    return <FooterSingleBar key={item.id} list={item}/>
                })}
            </div>
            <div className="w-full border"></div>
            <div className="w-full flex flex-wrap justify-between">
                <div className="flex flex-col md:flex-row gap-2 ">
                    <p className="text-grey font-semibold text-sm xl:text-base" >Privacy Policy</p>
                    <p className="text-grey font-semibold text-sm xl:text-base" >License</p>
                    <p className="text-grey font-semibold text-sm xl:text-base" >API</p>
                    <p className="text-grey font-semibold text-sm xl:text-base" >©2024 All rights reserved</p>
                </div>
                <div className="flex gap-3">
                    <p className="text-grey font-semibold text-sm  xl:text-base" >Currency - USD</p>
                    <p className="text-grey font-semibold flex text-sm xl:text-base" >English</p>
                </div>
            </div>
        </div>
    )
}