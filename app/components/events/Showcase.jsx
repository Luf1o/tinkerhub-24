import ShowcaseCard from "../common/ShowcaseCard";
function Showcase(){
    return(
        <div className="w-full h-auto border-t-4 rounded-t-lg border-red-500">
            <div>
                <span className='text-6xl text-bold ml-12'>SHOWCASE //</span>
            </div>
            <div className='bg-red-100 w-auto h-auto flex gap-6 p-10 flex-wrap'>
                <ShowcaseCard />
                <ShowcaseCard />
                <ShowcaseCard />
                <ShowcaseCard />
                <ShowcaseCard />
                <ShowcaseCard />
             
            </div>
        </div>
    )
}  
export default Showcase;