'use client'

import Ham from "./ham"

export default function Navbar(){
    return(
        <nav className='w-screen h-auto flex flex-row-reverse px-2 py-4 justify-between'>
            <div className='w-[120px] h-8 lg:h-12 bg-white rounded-lg lg:mx-6 mx-2 text-center'>
                <span className="text-black flex justify-center items-center h-full">Logo</span>
            </div>
            <div>
            </div>
        </nav>
    )
}