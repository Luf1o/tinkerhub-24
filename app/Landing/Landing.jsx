import Image from "next/image";
import { PurpleButton } from "../components/common/PurpleHazeButton";
import About from "../about/tinkerabout";
import EventPreviewCard from "../events/EventsPreviewCard";
import Showcase from "../events/Showcase";
import TeamAbout from "../about/TeamAbout";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Landing() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-max relative">
        <div className="flex justify-center litems-center max-h-[400px] lg:max-h-[800px] lg:max-w-fit max-w-[400px]">
          <Image
            className="lg:rounded-[50px] "
            src="/landing.webp"
            width={1850}
            height={500}
            loading="lazy"
            style={{ objectFit: "cover" }}
            alt="Landing Page"
          />
          <div className="flex flex-col absolute h-full w-full justify-center items-center">
            <p className="font-roboto text-md lg:text-6xl w-5/6 lg:w-4/6 text text-center">
              “Once a new technology rolls over you, if {"you're"} not part of
              the steamroller, {"you're"} part of the road.”
            </p>
            <p className="lg:text-lg text-sm">Stewart Brand</p>
            <PurpleButton
              link={"https://www.tinkerhub.org/"}
              buttonText={"Join Us"}
            />
          </div>
        </div>
      </div>
      <About />
      <TeamAbout />
      <EventPreviewCard />
      {/* <Showcase /> */}
    </div>
  );
}
