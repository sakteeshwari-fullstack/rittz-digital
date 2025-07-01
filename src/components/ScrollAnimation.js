"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimatedDiv() {
  const boxRef = useRef(null);

  useEffect(() => {
    const element = boxRef.current;

    gsap.fromTo(
      element,
      { y: 100 },
      {
        y: 483,
        width: '99.25vw',
        height: '23vh',
        duration: 2.5,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
        },
        ease: "none",
      }
    );
  }, []);

  return (
    <div
      ref={boxRef}
      className="absolute hidden md:block top-25 -left-31 w-[825px]  h-[450px] bg-amber-500 z-0 "></div>
  );
}
