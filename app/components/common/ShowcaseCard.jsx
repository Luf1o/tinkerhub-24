import Image from "next/image"

export default function ShowcaseCard(){
    return(
        <div className=' flex relative justify-center bg-purple-800 rounded-3xl'>
            <Image 
                width = {500}
                height = {350}
                src = '/case2.webp'
                alt="logo"
                //fill={true}
            />
        </div>
    )
}