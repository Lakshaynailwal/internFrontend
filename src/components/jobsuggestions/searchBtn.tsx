import { searchInputState } from "@/state/state"
import Image from "next/image"
import React from "react"
import { useRecoilState } from "recoil"

// static btn showing suggestions for search
export const SearchBtn : React.FC<{title : string}> = ({title})=>{
    const [input , setInput] = useRecoilState(searchInputState); // to trigger useEffect if changed to get filtered list
    return(
        <button onClick={()=>{
            return setInput(title)
        }} className="text-xs md:text-sm rounded-xl font-bold flex border md:gap-2 border-black p-1 md:p-2 items-center" >
            {title}
            <Image className="w-5 h-5" src="/searchIcon.png" alt="" width={30} height={30} />
        </button>
    )
}