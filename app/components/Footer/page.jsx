import { FooterLinks } from "@/constants"
export default function Footer(){
    return(
        <div className="w-screen flex flex-col lg:flex-row bg-black/20 pb-6 items-center justify-center border-t-2 border-t-red-500">
          <div className="w-full flex ml-4 mr-4 lg:flex-row  flex-col-reverse items-center lg:justify-between justify-center">
            <span className="hidden">Block</span>
            <span className="text-2xl lg:p-3 lg:mt-0  mt-4">TinkerHub 24</span>
            <div className="flex lg:flex-row lg:mt-0 mt-3 flex-col gap-2">
                {FooterLinks.map((link,index) => (
                    <div key={index} className="flex items-center gap-2 justify-start">
                        <div className="p-4 bg-white rounded-xl"></div>
                        <a href={link.link} className="text-white">{link.name}</a>
                    </div>
                ))}
            </div>
          </div>
        </div>
    )
}