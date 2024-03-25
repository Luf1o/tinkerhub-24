'use client'
import { Navlinks } from "@/app/constants"
import Link from "next/link"
export default function Navbar(){
    return(
        <nav className='w-screen h-auto flex px-2 py-4 justify-between'>
            <div className='w-[120px] h-12 bg-white rounded-lg mx-6 text-center'>
                <span className="text-black">Logo</span>
            </div>
            <div className="w-1/2 h-12 bg-white gap-2 text-black">
                {Navlinks.map((links)=>{
                    <Link href={links.href} key={links.key}>{links.title}</Link>
                })}
            </div>
        </nav>
    )
}