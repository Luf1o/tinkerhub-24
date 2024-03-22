import EventCard from "../components/common/EventCard";

function EventPreviewCard(){
    return(
        <div>
            <div className='w-screen h-16 bg-white my-5 flex items-center'>
                <nav className="flex border-2 gap-10 w-full h-full justify-center lg:justifiy-evenly items-center 0 text-black text-sm lg:text-2xl ">
                    <div className='w-1 h-9 bg-red-600'></div>
                        <div><span>EVENTS</span></div>
                        <div><span>WORKSHOP</span></div>
                        <div><span>PAST EVENTS</span></div>
                </nav>
            </div>
            <div className="flex flex-wrap gap-10 lg:max-h-max lg:max-w-full place-content-center">            
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
        </div>
        </div>
    )
}
export default EventPreviewCard;