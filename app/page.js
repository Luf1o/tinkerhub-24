import Navbar from "./components/Navbar/Navbar"
import Landing from "./components/Landing/Landing"
export default function Home() {
  return (
    <main className='min-h-screen w-screen bg-[#282424] relative flex flex-col justify-start items-center '>
      <Navbar />
      <Landing />
  
    </main>
  )
}
