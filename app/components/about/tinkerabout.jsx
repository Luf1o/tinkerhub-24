import Image from "next/image"
import { dummyVar } from "./aboutData"
function Card({textVar,position}){
    return (
        <div
            className={`flex ${
                position === "left" ? "lg:flex-row-reverse flex-col " : "lg:flex-row flex-col"
            } gap-4 lg:gap-12 lg:m-10 m-0  justify-center items-center lg:py-16 py-4`}
        >
            <div className="bg-purple-400 rounded-2xl">
                <Image
                    src="/Cat.webp"
                    objectFit="fit"
                    alt="Cat photo"
                    loading="lazy"
                    width={150}
                    height={200}
                />
            </div>
            <p className="lg:w-5/6  text-justify lg:text-xl">{textVar}</p>
        </div>
    );
}

export default function About(){
    return(
        <div className="flex flex-col h-auto w-5/6 lg:w-[1800px] items-center justify-center ">
            <Card textVar={dummyVar} position={'left'} />
            <Card textVar={dummyVar} position={''} />
        </div>
    )
}