import { dummyNames,dummyVar } from "../../about/aboutData"
import Image from "next/image"
export default function TeamCard(){
    return(
        <div className="flex w-full h-auto relative mt-12 lg:flex-row items-center justify-center gap-2 md:gap-5 flex-col">
                <div className="w-5/12 h-auto flex items-center justify-center border-2 borde-white ">
                    <Image
                        src='/epxand2.webp'
                        width={400}
                        height={750}
                        alt="lafa"
                        objectFit="cover"
                        className="lg:ml-4"
                    />
                </div>
                <div className="w-5/6  h-full flex flex-col gap-2 lg:gap-10 items-center justify-start pl-5 ">
                    <div className="flex lg:flex-row flex-col w-4/6 items-center gap-0 lg:gap-10 my-2">
                        <h3 className="lg:text-[46px] text-[40px]">DevName</h3>
                        <div className="px-3 lg:ml-1 bg-purple-400 py-2 flex text-black  text-xl">
                            <span className="lg:text-lg text-sm">LEAD Position</span>
                        </div>
                    </div>
                    <div className="flex-wrap w-full xl:w-8/12 text-justify text-[12px] lg:text-2xl">
                        <span>{dummyVar}</span>
                    </div>
                    <div className="flex-wrap flex lg:max-w-8/12 bg-slate-100 xl:justify-start justify-center">
                      {dummyNames[2].map((names)=>(
                        <div key={names} className="bg-slate-100 text-black p-4 lg:text-left text-center min-w-48"><span className="text-black">~</span>{names}</div>
                      ))}
                    </div>                  
                </div>
            </div>
    )

}