"use client";
import React, { useEffect, useRef } from "react";
import ScrollAnimatedDiv from "./ScrollAnimation";
import gsap from "gsap";
import Image from "next/image";

export default function Ourgoals() {
  const anime1 = React.useRef(null);
  const anime2 = React.useRef(null);
  const anime3 = React.useRef(null);
  const anime4 = React.useRef(null);
  const anime5 = React.useRef(null);
  useEffect(() => {
    const el1 = anime1.current;
    const el2 = anime2.current;
    const el3 = anime3.current;
    const el4 = anime4.current;
    const el5 = anime5.current;

    gsap.to(el1, {
      y: "10px",
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
    gsap.to(el2, {
      y: "10px",
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
    gsap.to(el3, {
      y: "10px",
      x: "10px",
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    gsap.to(el4, {
      x: "10px",
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
    gsap.to(el5, {
      y: "10px",
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <>
      <section className="bg-white sm:py-10 py-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <ScrollAnimatedDiv />
            <div className="relative z-10 ">
              <div>
                <div className="flex sm:block mb-5 mt-10 sm:mt-0 relative justify-center sm:justify-normal">
                  <div className="  flex sm:flex-row mt-20 flex-col gap-10">
                    <div className="bg-white  hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6  sm:w-[362px] sm:h-[282px] sm:ml-5 mx-4">
                      <div className="w-full  flex justify-center  relative mb-10">
                        <Image width={30} height={30} alt="ourGoal-images" ref={anime1}  src="/assets/our-goals/endtoend.svg"/>
                        
                      </div>
                      <h3 className="font-semibold text-[20px] mb-8 text-gray-700">
                        End-To-End Collaboration
                      </h3>
                      <p className="text-sm text-gray-500 text-[16px]">
                        We Work With You From The First Idea To The Final
                        Launch.
                      </p>
                    </div>

                    <div className="bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6 sm:w-[400px] sm:h-[282px] mx-2 sm:mx-0">
                      <div  className="w-full  flex justify-center relative mb-10">
                        <Image width={30} height={30} alt="ourGoal-images" ref={anime2} src="/assets/our-goals/creative.svg"/>
                        
                      </div>
                      <h3 className="font-semibold text-[20px] mb-8 text-gray-700">
                        Creative Problem-Solving
                      </h3>
                      <p className="text-sm text-gray-500 text-[16px]">
                        Blending Logic And Artistry To Deliver Smart, Elegant
                        Solutions.
                      </p>
                    </div>
                  </div>

                  <div className="text-right  absolute sm:-top-14  sm:right-2 -top-14 right-4">
                    <h2 className="font-bold mt-4">
                      <span className="text-green-500 text-5xl sm:text-[12vh]">
                        O
                      </span>
                      <span className="text-gray-800 sm:text-[9vh] text-3xl">
                        ur{" "}
                      </span>{" "}
                      <span className="text-gray-900 text-4xl sm:text-[9vh]">
                        Goals
                      </span>
                    </h2>
                    <div className="flex align-middle  justify-end">
                      <div className="h-auto flex align-center justify-center">
                        <div className="h-0.5 w-14  sm:w-[111px] bg-gray-600 my-7  mx-1 "></div>
                      </div>
                      <div className="text-sm text-black mt-1 text-right sm:text-left leading-[1.75]">
                        Code And Rules,
                        <br />
                        Creativity and Passion.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center sm:justify-normal">
                  <div className="flex flex-col gap-5 sm:flex-row ">
                    <div className="bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6 sm:w-auto sm:h-[282px] sm:ml-5 mx-4">
                      <div  className="w-full  flex justify-center relative mb-10">
                        <Image width={30} height={30} alt="ourGoal-images" ref={anime3} src="/assets/our-goals/Iterative.svg"/>
                        
                      </div>
                      <h3 className="font-semibold text-[20px] mb-8 text-gray-700">
                        Iterative Process
                      </h3>
                      <p className="text-sm text-gray-500 text-[16px]">
                        We Refine, Test, And Improve Every Step Of The Way.
                      </p>
                    </div>

                    <div className="bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6 sm:w-auto sm:h-[282px] sm:ml-5 mx-4">
                      <div  className="w-full  flex justify-center relative mb-10">
                        <Image width={80} height={50} alt="ourGoal-images" ref={anime4} src="/assets/our-goals/engineering.svg" />
                        
                      </div>
                      <h3 className="font-semibold text-[20px] mb-8 text-gray-700">
                        Engineering Meets Empathy
                      </h3>
                      <p className="text-sm text-gray-500 text-[16px]">
                        Our Tech Is Grounded In Purpose And Built For Real-World
                        Use.
                      </p>
                    </div>
                    <div className="bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6 sm:w-auto sm:h-[282px] sm:ml-5 mx-4">
                      <div  className="w-full flex justify-center relative mb-10">
                      <Image width={30} height={30} alt="ourGoal-images" ref={anime5} src="/assets/our-goals/launch-ready.svg"/>
                       
                      </div>
                      <h3 className="font-semibold text-[20px] mb-8 text-gray-700">
                        Launch-Ready Mindset
                      </h3>
                      <p className="text-sm text-gray-500 text-[16px]">
                        We Don’t Stop At Ideas; We Take Products To Market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden  whitespace-nowrap mt-8">
            <div className="inline-block animate-marquee sm:text-8xl text-4xl font-extrabold text-black md:text-white soft-shadow">
              Build faster. Launch smarter. No code required.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
