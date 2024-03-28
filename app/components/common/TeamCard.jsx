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
                <div className="w-full  h-full flex flex-col gap-2 lg:gap-10 items-center justify-start pl-0 lg:pl-5 ">
                    <div className="flex lg:flex-row flex-col w-4/6 items-center gap-0 lg:gap-10 my-2">
                        <h3 className="lg:text-[46px] text-[40px]">DevName</h3>
                        <div className="px-3 lg:ml-1 bg-purple-400 py-2 flex text-black  text-xl">
                            <span className="lg:text-lg text-sm">LEAD Position</span>
                        </div>
                    </div>
                    <div className="flex-wrap w-[90%] xl:w-8/12 text-justify text-[15px] lg:text-2xl">
                        <span>{dummyVar}</span>
                    </div>
                    <div className="flex-wrap flex lg:max-w-8/12 w-[90%] gap-y-2 justify-start ">
                      {dummyNames[2].map((names)=>(
                        <div key={names} className="bg-slate-100 text-black p-2 xl:p-4 lg:text-left text-center w-1/3 min-w-48"><span className="text-black">~</span>{names}</div>
                      ))}
                    </div>                  
                </div>
            </div>
    )

}