"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Casestudies() {
  const caseRef = useRef();
  const paraRef = useRef(null);

  const caseText = [
    { char: "C", className: "text-red-500" },
    { char: "a" },
    { char: "s" },
    { char: "e" },
    { char: " " },
    { char: "S" },
    { char: "t" },
    { char: "u" },
    { char: "d" },
    { char: "i" },
    { char: "e" },
    { char: "s" },
  ];

  const paragraph =
    "t Ritz Digital, we’re proud of the products we’ve built — and even prouder of the trust our clients place in us to build them right. We collaborate with businesses across industries to bring their ideas to life, with solutions that are scalable, user-focused, and impactful. Each project we take on is a partnership. We dig deep into your goals, create intuitive experiences, and use technology that powers real growth.";

  useEffect(() => {
    const letters = caseRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: caseRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );

    const paraLetters = paraRef.current.querySelectorAll(".para-letter");

    gsap.to(paraLetters, {
      color: "#000000",
      stagger: 0.02,
      scrollTrigger: {
        trigger: paraRef.current,
        start: "top 90%",
        end: "top 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative px-6 sm:px-10 lg:px-20 py-16 bg-white text-gray-800">
      <div>
        {/* Animated Heading */}
        <h2
          className="text-[clamp(2.5rem,10vw,6rem)] font-bold leading-tight overflow-hidden"
          ref={caseRef}
        >
          <div
            className="flex flex-wrap overflow-hidden"
            style={{ lineHeight: 1 }}
          >
            {caseText.map((item, index) => (
              <span key={index} className="overflow-hidden">
                <span
                  className={`letter inline-block text-[#494848] ${
                    item.className || ""
                  }`}
                >
                  {item.char === " " ? "\u00A0" : item.char}
                </span>
              </span>
            ))}
          </div>
        </h2>

        {/* Subline and line */}
        <div className="flex flex-wrap items-center mt-6">
          <div className="h-auto flex  items-center justify-center p-1">
            <div className="h-0.5 w-20  sm:w-52 bg-gray-300 mx-5"></div>
          </div>
          <div className="text-sm  sm:text-base text-gray-500 leading-[1.75]">
            Innovation In Action.
            <br />
            Impact By Design.
          </div>
        </div>
      </div>

      {/* Decorative Red Bar */}
      <div className="absolute w-48 h-4 bg-red-500 rounded-br-full mt-6 left-0"></div>

      {/* Paragraph */}
      <div className="mt-14 max-w-4xl mx-auto px-2 sm:px-6 lg:px-0">
        <p
          ref={paraRef}
          className="text-[17px] sm:text-[18px] leading-[32px] sm:leading-[38px] text-gray-500 flex flex-wrap"
        >
          <span className="text-3xl sm:text-4xl font-bold text-black mr-[2px]">
            A
          </span>
          {paragraph.split("").map((char, index) => (
            <span
              key={index}
              className="para-letter inline-block"
              style={{ color: "#888888" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-10 flex justify-center lg:justify-start lg:ml-16">
        <button className="w-full sm:w-[20rem] md:w-[24rem] px-6 py-4 text-base sm:text-lg border border-gray-400 text-black relative overflow-hidden group">
          <span
            className="absolute bottom-0 left-0 w-0 h-0 bg-black rounded-full transition-all duration-400 ease-out group-hover:w-[60rem] group-hover:h-[60rem]"
            style={{ transform: "translate(-50%, 50%)" }}
          ></span>
          <span className="relative z-10 transition-all duration-300 group-hover:text-white">
            Let&apos;s Talk
          </span>
        </button>
      </div>
    </section>
  );
}
