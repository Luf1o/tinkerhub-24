'use client'
import { useState } from "react";
import EventCard from "../components/common/EventCard";

function EventPreviewCard(){
    const [isOpen,setOpen] = useState(false);
    const toggleMenu = () =>{
        setOpen(!isOpen);
        console.log(isOpen);
    }
    return(
        <div>
            <div className='w-screen h-16 lg:h-24 bg-white my-5 flex items-center'>
                <nav className="flex border-2 gap-10 w-full h-full justify-center lg:justifiy-evenly items-center 0 text-black text-sm lg:text-2xl ">
                    <div className='w-1 h-9 bg-red-600'></div>
                        <div><span>EVENTS</span></div>
                        <div><span>WORKSHOP</span></div>
                        <div><span>PAST EVENTS</span></div>
                </nav>
            </div>
            <div className="flex flex-wrap gap-10 lg:max-h-max lg:max-w-full place-content-center">            
               <h1>Events</h1>
               <h1>Events</h1>
        </div>
        </div>
    )
}
export default EventPreviewCard;