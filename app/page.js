import Navbar from "./components/Navbar/Navbar"
import Landing from "./components/Landing/Landing"
export default function Home() {
  return (
    <main className='min-h-screen w-screen bg-[#282424] relative flex flex-col gap-4 justify-start items-center scrollbar-none-y'>
      <Navbar />
      <Landing />
    </main>
  )
}
