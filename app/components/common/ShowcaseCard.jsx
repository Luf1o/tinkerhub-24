import Image from "next/image"
import './styles.css'

export default function ShowcaseCard({w ,h , imgUrl}){
    return(
        <div className=' flex relative justify-center bg-purple-800 rounded-3xl overflow-hidden'>
            <Image 
                width = {w}
                height = {h}
                src = {imgUrl}
                alt="logo"
                className="z-10"
            />
            <div className="w-full h-full absolute z-20 rounded-3xl">
                <div className="w-full h-full sliderCard flex relative items-center hover:text-white text-black">
                        <div className="z-40 absolute w-full h-auto">
                        <p className="eventName text-2xl">Event Name</p>
                        </div>
                </div>
            </div>
        </div>
    )
}