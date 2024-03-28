import { useState } from "react"

const TinkerMenu = () => {
    const [isOpen,setOpen] = useState(false);
    const toggleMenu = () =>{
        setOpen(isOpen);
    };
}


export default function Ham(){
    return(
        <nav className={`${isOpen ? global.open :''} flex flex-col w-screen h-full bg-black/[.5] z-10 `} onClick={{toggleMenu}}>
            <h1>Hello</h1>
        </nav>
    )
}