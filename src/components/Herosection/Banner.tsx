
//setting the banner as specified in figma
export const Banner = ()=>{
    return(
        <div className="flex justify-center items-end p-10 bg-banner bg-no-repeat border  lg:w-4/5 w-full sm:w-5/6 mx-auto min-h-96 rounded-3xl" >
            <div className=" lg:w-4/5 sm:w-5/6 w-full text-center">
                    <h1 className="xl:text-4xl lg:text-xl sm:text-2xl text-xl text-white font-bold">Search for your next job</h1>
                    <h1 className="lg:text-sm sm:text-sm text-xs text-white text-center">When you are searching for a job, there are a few things you can do to get the most out of your search</h1>
            </div>
        </div>
    )
}