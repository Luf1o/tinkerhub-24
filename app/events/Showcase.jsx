import ShowcaseCard from "../components/common/ShowcaseCard";
function Showcase(){
    return(
        <div className="w-screen h-auto border-t-8 mt-4 rounded-t-xl border-red-500">
            <div className="mt-8">
                <span className='text-6xl text-bold ml-12'>SHOWCASE //</span>
            </div>
            <div className='max-w-screen h-auto flex gap-6 p-10 sm:flex-row flex-wrap justify-center'>
                <ShowcaseCard h={350} w={500} imgUrl ='/hike12.webp' />                               
            </div>
        </div>
    )
}  
export default Showcase;