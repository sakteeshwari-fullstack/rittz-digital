"use client";
import React, { useEffect, useRef } from "react";
import ScrollAnimatedDiv from "./ScrollAnimation";
import gsap from "gsap";

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
                    <div className="bg-white  hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6 sm:w-[362px] sm:h-[282px] sm:ml-5 mx-4">
                      <div ref={anime1} className="w-full relative mb-10">
                        <img
                          src="/assets/Rectangle 4156.png"
                          alt="Icon 1"
                          className="absolute  top-0 left-35 "
                        />
                        <img
                          src="/assets/Rectangle 4157.png"
                          alt="Icon 1"
                          className="absolute -top-2 left-38 "
                        />
                      </div>
                      <h3 className="font-semibold text-[20px] mb-8 text-gray-700">
                        End-To-End Collaboration
                      </h3>
                      <p className="text-sm text-gray-500 text-[16px]">
                        We Work With You From The First Idea To The Final
                        Launch.
                      </p>
                    </div>

                    <div className="bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6 sm:w-[362px] sm:h-[282px] sm:ml-5 mx-4">
                      <div ref={anime2} className="w-full relative mb-10">
                        <img
                          src="/assets/Rectangle 4158.png"
                          alt="Icon 2"
                          className=" absolute  top-0 left-35"
                        />
                        <img
                          src="/assets/Rectangle 4161.png"
                          alt="Icon 2"
                          className="absolute  top-0 left-35"
                        />
                        <img
                          src="/assets/Rectangle 4159.png"
                          alt="Icon 2"
                          className="absolute  top-0 left-38"
                        />
                        <img
                          src="/assets/Rectangle 4160.png"
                          alt="Icon 2"
                          className="absolute  top-4 left-40.5"
                        />
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
                    <div className="bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6 sm:w-[362px] sm:h-[282px] sm:ml-5 mx-4">
                      <div ref={anime3} className="w-full relative mb-10">
                        <img
                          src="/assets/Group 31.png"
                          alt="Icon 1"
                          className="absolute  top-0 left-35 "
                        />
                        <img
                          src="/assets/Group 32.png"
                          alt="Icon 1"
                          className="absolute -top-2 left-38.5 "
                        />
                      </div>
                      <h3 className="font-semibold text-[20px] mb-8 text-gray-700">
                        Iterative Process
                      </h3>
                      <p className="text-sm text-gray-500 text-[16px]">
                        We Refine, Test, And Improve Every Step Of The Way.
                      </p>
                    </div>

                    <div className="bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6 sm:w-[362px] sm:h-[282px] sm:ml-5 mx-4">
                      <div ref={anime4} className="w-full relative mb-10">
                        <img
                          src="/assets/blue circle.png"
                          alt="Icon 2"
                          className=" absolute  top-0 left-37"
                        />
                        <img
                          src="/assets/blue star.png"
                          alt="Icon 2"
                          className="absolute  -top-2 left-35"
                        />
                        <img
                          src="/assets/red dot.png"
                          alt="Icon 2"
                          className="absolute  -top-1 left-43"
                        />
                        <img
                          src="/assets/red rectangle.png"
                          alt="Icon 2"
                          className="absolute  -top-2 left-42"
                        />
                        <img
                          src="/assets/yellow dot.png"
                          alt="Icon 2"
                          className="absolute  top-4 left-30"
                        />
                        <img
                          src="/assets/yellow rectangle.png"
                          alt="Icon 2"
                          className="absolute  top-3 left-29"
                        />
                      </div>
                      <h3 className="font-semibold text-[20px] mb-8 text-gray-700">
                        Engineering Meets Empathy
                      </h3>
                      <p className="text-sm text-gray-500 text-[16px]">
                        Our Tech Is Grounded In Purpose And Built For Real-World
                        Use.
                      </p>
                    </div>
                    <div className="bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md rounded-lg inset-shadow-sm inset-shadow-gray-300 flex flex-col justify-center text-center p-6 sm:w-[362px] sm:h-[282px] sm:ml-5 mx-4">
                      <div ref={anime5} className="w-full relative mb-10">
                        <img
                          src="/assets/Ellipse 49.png"
                          alt="Icon 1"
                          className="absolute  top-0 left-35 "
                        />
                        <img
                          src="/assets/Vector.png"
                          alt="Icon 1"
                          className="absolute top-0.5 left-36.5 "
                        />
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
          <div className="overflow-hidden whitespace-nowrap mt-8">
            <div className="inline-block animate-marquee sm:text-8xl text-4xl font-extrabold text-black md:text-white soft-shadow">
              Build faster. Launch smarter. No code required.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
