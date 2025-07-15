"use client";

import CtaButton from "@/components/ui/CtaButton";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const commonRef = useRef([]);

  useGSAP(() => {
    gsap.set(commonRef.current, {
      autoAlpha: 0,
      yPercent: 100
    });

    gsap.to(commonRef.current, {
      autoAlpha: 1,
      yPercent: 0,
      delay: 0.5,
      duration: 1.4,
      ease: "power4.out",
      stagger: {
        amount: 0.4
      }
    });
  }, []);

  return (
    <div className="escape hero min-h-screen bg-gray-50 px-2 flex justify-center items-center">
      <div className="flex flex-col gap-4 md:gap-6 justify-center items-center text-center translate-y-[6%]">
        <div className="flex text-[2.25rem] lg:text-[2.5rem] tall-mobile:text-[2.75rem] md:text-[2.5rem] xl:text-[3rem] font-extrabold flex-col leading-[1.5] text-balance px-2 text-[#1F2937]">
          
          <div className="overflow-hidden">
            <h1 className="opacity-0" ref={(el) => commonRef.current[0] = el}>
              Launch Your Website or Online Store
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <span 
              ref={(el) => commonRef.current[1] = el} 
              className="opacity-0 inline-block text-[#10B981]"
            >
              In One Minute
            </span>
          </div>
          
          <div className="overflow-hidden">
            <div
              ref={(el) => commonRef.current[2] = el}
              className="opacity-0 flex justify-center items-center gap-2"
            >
              <h1>
                <span className="relative z-50 bg-contain bg-no-repeat bg-center bg-[url(/assets/LandingPage/Hero/paint-stroke.png)]">
                  No Code,
                </span>{" "}
                Infinite Power
              </h1>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <p
            ref={(el) => commonRef.current[3] = el}
            className="opacity-0 text-base mx-auto text-center md:text-lg max-w-[85%] md:max-w-[51%] text-[#6B7280] tall-mobile:text-[1.1rem]"
          >
            Build custom tools effortlessly for any industry - fast, flexible,
            scalable, and beautifully simple.
          </p>
        </div>
        
        <div className="overflow-hidden">
          <CtaButton 
            className={"opacity-0"} 
            ref={(el) => commonRef.current[4] = el} 
            text={"Start free trial"} 
            icon={true} 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;