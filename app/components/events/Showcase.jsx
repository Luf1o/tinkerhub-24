import ShowcaseCard from "../common/ShowcaseCard";
function Showcase(){
    return(
        <div className="w-full h-auto border-t-8 mt-4 rounded-t-xl border-red-500">
            <div className="mt-8">
                <span className='text-6xl text-bold ml-12'>SHOWCASE //</span>
            </div>
            <div className='w-auto h-auto flex gap-6 p-10 flex-wrap'>
                <ShowcaseCard h={350} w={500} imgUrl ='/case2.webp' />             
                <ShowcaseCard h={350} w={500} imgUrl ='/case2.webp' />             
                <ShowcaseCard h={350} w={500} imgUrl ='/case2.webp' />             
            </div>
        </div>
    )
}  
export default Showcase;