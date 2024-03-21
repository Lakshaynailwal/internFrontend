"use client"
import {JobModel} from "@/components/JobModel/jobmodel"
import { RecoilRoot} from "recoil";
import { HeroSection } from "@/components/Herosection/HeroSection";
import { SuggestedJob } from "@/components/jobsuggestions/suggestedJob";
import { JobResultSection } from "@/components/jobsearchresult/JobResultSection";
import { Skeleton } from "@/components/skeleton/skeleton";

export default function Home() {
  
  return (
    // wrapping inside recoilRoot for state management
    <RecoilRoot>
      <div className=" border-b border-t" >
        <HeroSection/>
        <JobModel/>
        <SuggestedJob/>
        <JobResultSection/>
      </div>
    </RecoilRoot>
  );
}


