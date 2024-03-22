'use client'
import { useState } from "react";
import TeamCard from "../components/common/TeamCard";
function TeamAbout(){
    const [selected,setSelected] = useState(null);
    function sliderOnClick(buttonId){
       if(buttonId!=selected){
            setSelected(buttonId)
       }console.log(buttonId)
    }
    function popup(){
        console.log('Popup shown')
    }
    return(
        <div className='w-full mt-14 h-auto p-10 flex flex-col'>
            <div className="flex my-8">
                <span className="lg:text-[98px] w-full lg:text-left text-center text-4xl "> 
                    MEET THE TEAM
                </span> 
            </div> 
            <TeamCard />
            <div className=" sm:w-screen w-full items-center justify-center gap-12 h-auto mt-6 p-1 hidden">
                <div className="p-1 rounded-md w-32 h-3 hover:cursor-pointer 'selected ===buttonId? bg-slate-300 : bg-slate-500'  " id='dev' onClick={sliderOnClick}></div>
                <div className="p-1 rounded-md w-32 h-3 bg-slate-500 hover:cursor-pointer " id='cap'  onClick={sliderOnClick}></div>
                <div className="p-1 rounded-md w-32 h-3 bg-slate-500"></div>
                <div className="p-1 rounded-md w-32 h-3 bg-slate-500"></div>
                <div className="p-1 rounded-md w-32 h-3 bg-slate-500"></div>
                <div className="p-1 rounded-md w-32 h-3 bg-slate-500"></div>
                <div className="p-1 rounded-md w-32 h-3 bg-slate-500"></div>
            </div>
        </div>
    )

}

export default TeamAbout;