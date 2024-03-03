import Image from "next/image";
const size = 400;
function EventCard(){
    return(
        <div className='w-[300px] h-[350px] rounded-3xl overflow-hidden flex justify-top items-center flex-col bg-[#151010] m-3'>
            <Image 
                src='/AGMw.webp'
                width={size}
                height={size}
                alt='POSTER'
                loading="lazy"
            />
            <div><span>POSTER TITLE</span></div>
        </div>
    )
}
export default EventCard;