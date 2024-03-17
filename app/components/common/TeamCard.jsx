import { dummyNames,dummyVar } from "../about/aboutData"
import Image from "next/image"
export default function TeamCard(){
    return(
        <div className="flex w-full h-auto relative mt-24 lg:flex-row items-center justify-center md:gap-5 flex-col">
                <div className="w-auto sm:w-full flex items-center justify-center  ">
                    <Image
                        src='/epxand2.webp'
                        width={400}
                        height={750}
                        alt="lafa"
                        className="lg:ml-4"
                    />
                </div>
                <div className="w-full h-full flex flex-col gap-10  justify-center pl-5 ">
                    <div className="flex lg:flex-row flex-col w-full sm:justify-center lg:justify-start items-center gap-10 my-2">
                        <h3 className="lg:text-[80px] text-[56px]">DevName</h3>
                        <div className="px-3 lg:ml-1 bg-purple-400 py-2 flex text-black items-center justify-center text-xl">
                            <span className="lg:text-lg text-sm">LEAD Position</span>
                        </div>
                    </div>
                    <div className="w-full flex-wrap max-w-3xl text-justify">
                        <span className="text-lg ">{dummyVar}</span>
                    </div>
                    <div className="flex-wrap flex lg:max-w-[1000px] bg-slate-100">
                      {dummyNames[2].map((names)=>(
                        <div key={names} className="bg-slate-100 text-black p-4 border border-red-500 min-w-48"><span className="text-black">~</span> {names}</div>
                      ))}
                    </div>                  
                </div>
            </div>
    )

}