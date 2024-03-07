'use client'
import { useState } from "react";
import TeamCard from "../common/TeamCard";
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
        <div className='w-full max-h-[720px] p-10 flex-col'>
            <div>
                <span className="text-6xl"> 
                    MEET THE TEAM
                </span> 
            </div> 
                <TeamCard />
            <div className="flex w-full items-center justify-center gap-12 h-auto mt-6 p-1">
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