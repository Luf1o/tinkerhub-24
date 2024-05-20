"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function Showcase() {
  const search = useSearchParams();
  console.log(search.get("name"));
  return (
    <div className="w-screen h-auto border-t-8 mt-4 rounded-t-xl border-red-500">
      <div className="md:p-12 p-8 pb-24 flex md:flex-row flex-col gap-5">
        <div className="flex flex-col justify-between items-center w-1/3">
          <div>
            <Image
              width={300}
              height={800}
              src={"/AGMw.webp"}
              alt="logo"
              className="z-10"
            />
          </div>
          <button class="relative text-[1.95rem] font-righteous text-white text-center">
            REGISTER
          </button>
        </div>
        <div className="flex-grow">
          <div className="text-6xl uppercase">{search.get("name")}</div>
          <div className="flex justify-center md:justify-end py-12">
            <div className="border py-3 px-24">RULES / GUIDELINES</div>
          </div>
          <div className="flex gap-2 justify-center md:justify-start">
            <div className="flex gap-2 flex-col ">
              {[search.get('venue'), search.get("fees"), search.get("date"), "Ex Dt 2"].map((item,i) => {
                return (
                  <div key={i} className="bg-[rgba(233,231,231,0.3)] py-2 md:px-10 px-5 text-lg md:text-2xl font-sans">
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-2 flex-col">
              {[
                search.get("cordinator"),
                search.get("fcordinator"),
                "EXTRA DETAIL 1",
                "Ex Dt 2",
              ].map((item,i) => {
                return (
                  <div key={i} className="bg-[rgba(233,231,231,0.3)] py-2 md:px-10 px-5 text-lg md:text-2xl font-sans">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
