import Image from "next/image"
import { dummyVar } from "./aboutData"
function Card({textVar,position}){
    return (
        <div
            className={`flex ${
                position === "left" ? "lg:flex-row-reverse flex-col " : "lg:flex-row flex-col"
            } gap-4 lg:gap-12 justify-center items-center max-w-screen-xl py-2`}
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
            <p className="xl:w-5/6 w-5/6 text-justify text-[12px] lg:text-2xl">{textVar}</p>
        </div>
    );
}

export default function About(){
    return(
        <div className="flex flex-col h-auto items-center justify-center mt-10">
            <Card textVar={dummyVar} position={'left'} />
            <Card textVar={dummyVar} position={''} />
        </div>
    )
}