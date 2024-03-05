'use client'
import { useState } from "react";
import TeamCard from "../common/TeamCard";
function TeamAbout(){
    const [selected,setSelected] = useState(null);
    function sliderOnClick(buttonId){
        switch(buttonId){
                case 1:{
                    if(setSelected!=buttonId){
                        setSelected(buttonId);
                        console.log("selected")
                }
                    else{
                        setSelected(null);
                        console.log("unselected button 1")
                    }
                    break;
                }
                default: 
                 console.log("error swtiching")
                 break;
        }
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
                <div className="p-1 rounded-md w-32 h-3 bg-slate-300 hover:cursor-pointer "  onClick={sliderOnClick}></div>
                <div className="p-1 rounded-md w-32 h-3 bg-slate-500"></div>
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