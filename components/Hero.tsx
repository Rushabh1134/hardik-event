import Image from "next/image";
import { Button } from "./ui/button";
import { CircleUserRoundIcon } from "lucide-react";

interface HeroProps {
  tagline: string;
}

const HeroComponent: React.FC<HeroProps> = ({ tagline }) => {
  return (
    <div className="">
      <div className=" pt-16">
        <div className="relative -z-10">
          <div className="bg-red-200 w-20 h-20 bottom-10 right-32 rounded-full blur-2xl absolute animate-blob animation-delay-4000">
            {" "}
          </div>
          <div className="bg-violet-900 w-20 h-20 top-3 left-11 rounded-full blur-2xl absolute animate-blob delay-700">
            {" "}
          </div>
          <div className="bg-red-700 w-20 h-20 top-10 right-20 rounded-full blur-2xl absolute animate-blob delay-1000">
            {" "}
          </div>

          <div className="absolute top-10 pr-40 pt-11 pl-4">
            <h1 className="pb-2">{tagline}</h1>
            <div className="leading-tight">
                <h2 className="text-red-600 ">Hardik</h2>{" "}
                <h2 className="">Events</h2>
            </div>
          </div>
          <div className="flex relative right-0 justify-end ">
            <Image
              src="/images/dj_man.png"
              width={800}
              height={800}
              alt={""}
              className=" rounded-xl relative filter hue-rotate-15 shadow-inner bg-transparent float-right "
            />
          </div>
          <div className=" h-10 -bottom-5  bg-slate-950 absolute -z-100 w-full blur-md "></div>
        </div>
        <div className="flex justify-center mt-16">
            <div className="relative group">
                <div className="absolute bg-gradient-to-r from-pink-600 to-purple-600 blur -inset-0.5 opacity-75 group-hover:opacity-100 animate-tilt transition    "></div>
                <Button className="relative bg-slate-900  hover:bg-hsl(222.2 47.4% 11.2%)/90 text-yellow-50">
                   <CircleUserRoundIcon className="mr-2 group-hover:text-gray-200 transition duration-200"/> Get in Touch
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
