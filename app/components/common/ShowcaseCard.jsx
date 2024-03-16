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
            <div className="w-full h-full absolute z-20">
                <div className="w-full h-full sliderCard 
                flex relative justify-start items-center">
                        <p className="z-40 absolute">Event Name</p>
                </div>
            </div>
        </div>
    )
}