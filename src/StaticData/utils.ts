export const navItem : {
    id:number;
    path:string;
    title:string
}[] = [
    {
        id : 10,
        path : "#",
        title : "Feed"
    },
    {
        id : 20,
        path : "#",
        title : "Contacts"
    },
    {
        id : 30,
        path : "/",
        title : "Jobs"
    },
    {
        id : 40,
        path : "#",
        title : "Messages"
    },
    {
        id : 50,
        path : "#",
        title : "Updates"
    }
]


export const footerItem :{
    id:number;
    title:string
    arr:string[];
}[] = [
    {   
        id  : 100,
        title : "Bookings support",
        arr  : ["Covid-19" , "Help Center" , "Support" ,"Trust & Safety"],
    },
    {
        id  : 200,
        title : "Community",
        arr : ["Against Discrimination" , "Invite friends" , "Gift cards"],
    },
    {
        id  : 300,
        title : "About",
        arr : ["How it works" , "Careers" , "About us" , "Media"],
    },
    {
        id  : 400,
        title : "Become an employer",
        arr : ["Post your job" , "Business account" , "Resource Center" , "Community"]
    }
]


export const suggestedJob : {title : string}[] = [
    {title : "Founder"},
    {title : "Founding partner"},
    {title : "Board member"},
    {title : "Enterpreneur in residence"},
    {title : "Personal Assistant"},
    {title : "Sales"},
    {title : "Project manager"},
    {title : "Co-founder"},
    {title : "Developer"},
    {title : "Managing director"},
]

export const adminSideItem : {
    id:number;
    path:string;
    title:string
}[] = [
    {
        title:"Admin",
        path : "/Admin",
        id:-3
    },
    {
        title : "Job Listing",
        path : "/Admin/joblisting",
        id : -1
    },
    {
        title : "Add Job",
        path : "/Admin/addjob",
        id : -2
    }
]