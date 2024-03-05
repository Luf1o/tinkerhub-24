import { dummyNames,dummyVar } from "../about/aboutData"
import Image from "next/image"
export default function TeamCard(){
    return(
        <div className="flex h-auto relative mt-6">
                <div className="w-1/3 h-auto flex items-center ">
                    <Image
                        src='/Ricardo.webp'
                        width={115}
                        height={150}
                        alt="lafa"
                        objectFit ='contain'
                        className="ml-4"
                    />
                </div>
                <div className="w-2/3 h-full flex flex-col gap-10 justify-center pl-5">
                    <div className="flex">
                    <h3 className="text-5xl">Ricardo Milo</h3>
                    <div className="px-3 py-2 ml-6 bg-purple-400 rounded-md text-black">
                        <span>DEV LEAD</span>
                    </div>
                    </div>
                    <div className="w-full flex-wrap max-w-3xl text-justify">
                        <span className="text-lg ">{dummyVar}</span>
                    </div>
                    <div className="flex-wrap flex ">
                      {dummyNames.map((names)=>(
                        <div key={names} className="bg-slate-100 text-black p-4 mb-2 "><span className="text-black">+</span> {names}</div>
                      ))}
                    </div>
                </div>
            </div>
    )

}