import { suggestedJob } from "@/StaticData/utils";
import { SearchBtn } from "./searchBtn";

// collection of searchBtn showing suggestion for filtering the result
export const SuggestedJob = ()=>{
    return(
        <div className="w-4/5 px-7 md:py-7 md:p-0 md:w-3/5 mx-auto  gap-5 flex flex-col">
        <h1 className="text-base">Suggested job searches</h1>
      <div className="flex flex-wrap gap-3 md:gap-5">
        {/* static data from utils */}
        {suggestedJob.map((item : {
          title : string;
        })=>{
          return <SearchBtn key={item.title} title = {item.title} />
        })}
      </div>
    </div>
    )
}