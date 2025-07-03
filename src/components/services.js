"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCasrousel from "./serviceCarousel";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const serviceRef = useRef();
  const heading = "Our Services";

  useEffect(() => {
    const letters = serviceRef.current.querySelectorAll(".letter");

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
          trigger: serviceRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <div className="bg-green-600 text-white px-4 sm:px-6 md:px-16 py-12 relative">
      {/* Heading */}
      <div className="text-center md:text-right overflow-hidden mb-6 sm:mb-10">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[95px] font-bold leading-tight"
          ref={serviceRef}
        >
          <div className="flex flex-wrap justify-center md:justify-end">
            {heading.split("").map((char, i) => (
              <span key={i} className="overflow-hidden inline-block">
                <span className="letter inline-block text-white">
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            ))}
          </div>
        </h2>
      </div>

      {/* Subheading + Divider */}
      <div className="flex flex-col md:flex-row md:justify-end items-center md:items-start mb-10">
        <div className="h-0.5 w-32 sm:w-48 bg-white/60 mb-4 md:mb-0 md:mr-4" />
        <p className="text-sm sm:text-base md:text-lg text-center md:text-left leading-snug">
          Affordable innovation,
          <br />
          built for impact.
        </p>
      </div>

      
      <ServiceCasrousel/>

      {/* Bottom Link */}
      <div className="mt-12 flex justify-center md:justify-start">
        <a
          href="#"
          className="text-white text-sm flex items-center gap-2 hover:underline"
        >
          Our Services
          <span className="text-lg">›</span>
        </a>
      </div>
    </div>
  );
}
