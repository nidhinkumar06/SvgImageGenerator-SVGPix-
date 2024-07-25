import { CheckCircle2 } from "lucide-react";
import React from "react";

const LandingHero = () => {
  return (
    <div className="flex flex-col pt-6 px-3 gap-2 md:gap-4 items-center">
        <h1 className="text-5xl md:text-9xl font-bold text-[#222222]">
          SVGPix
        </h1>
        <div className="flex flex-col gap-4 md:gap-8 items-center">
          <div className="flex gap-2">
            <h3 className="text-2xl md:text-4xl font-semibold text-[#222222] underline underline-offset-5">
              Free AI
            </h3>
            <h3 className="text-2xl md:text-4xl font-semibold text-[#222222]">
              {" "}
              - Text in, SVG out
            </h3>
          </div>
          <div className="hidden w-full md:w-[60%] md:flex items-center text-center">
            <p>
            Unleash the AI magic! Turn your text into dazzling SVG art for free. No sweat, just pure tech wizardry!
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 md:items-center">
            <div className="flex gap-4 md:gap-8">
              <div className="flex gap-1">
                <CheckCircle2 fill="black" color="white" />
                <p>100% Free</p>
              </div>
              <div className="flex gap-1">
                <CheckCircle2 fill="black" color="white" />
                <p>No Limitation</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-8">
              <div className="flex gap-1">
                <CheckCircle2 fill="black" color="white" />
                <p>No Signup</p>
              </div>
              <div className="flex gap-1">
                <CheckCircle2 fill="black" color="white" />
                <p>No Watermark</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LandingHero;
