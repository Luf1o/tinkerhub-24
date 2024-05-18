"use client";
import { useState } from "react";
import TeamCard from "../components/common/TeamCard";
import { useRouter } from "next/navigation";

function TeamAbout() {
  const [selected, setSelected] = useState(null);
  function sliderOnClick(buttonId) {
    if (buttonId != selected) {
      setSelected(buttonId);
    }
    console.log(buttonId);
  }
  function popup() {
    console.log("Popup shown");
  }
  const router = useRouter();
  return (
    <div className="w-full mt-14 h-auto p-0 lg:p-10 flex flex-col">
      <div className="flex my-0 w-full justify-center">
        <span
          onClick={() => router.push("/team")}
          className="lg:text-[98px]   text-center text-[65px] transition-all ease-in-out duration-300 hover:text-purple-500 cursor-pointer w-max"
        >
          MEET THE TEAM →
        </span>
      </div>
      {/* <TeamCard /> */}
    </div>
  );
}

export default TeamAbout;
