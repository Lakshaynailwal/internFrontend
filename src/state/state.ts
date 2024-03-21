import { atom } from "recoil";
//defing global states using recoil

// to handle the jobModel display
export const jobModelState = atom({
    key: "jobModelState",
    default : false
})

// to handle the searching / filtering the data
export const searchInputState = atom({
    key: "searchInputState",
    default : ""
})

// to handle the specifc job id to get its data
export const jobId = atom({
    key :"jobId",
    default:""
})

// handles the whole filtered/paginated list of jobs
export const jobSearchResult = atom({
    key:"jobSearchResult",
    default:[]
})

// total count of jobs available
export const TotelCountState = atom({
    key:"TotelCountState",
    default:0
})

// to trigger display of update modal
export const AdminjobModelState = atom({
    key: "AdminjobModelState",
    default : false
})