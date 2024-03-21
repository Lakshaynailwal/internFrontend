
"use client"

import { Sidebar } from "@/components/Admin/adminSidebar";
import Image from "next/image";
import { RecoilRoot} from "recoil";

export default function Page(){
    return(
        <RecoilRoot>
            {/* welcome page for admin */}
        <div className="flex min-h-side min-w-screen border-b">
            <Sidebar/>
            <div className="flex flex-col w-5/6 items-center text-center justify-center">
                <Image src="/logo.webp" alt="" width={100} height={100}/>
                <h1 className="sm:text-3xl text-xl font-medium">Welcome to Admin Panel</h1>
            </div>
        </div>
        </RecoilRoot>
    )
}