'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import RotatingCards from './RotatingCards';

gsap.registerPlugin(ScrollTrigger);

const CardsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play reverse play reverse"
        }
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full bg-gray-900 text-white flex items-center justify-center"
    >
      <RotatingCards />
    </section>
  );
};

export default CardsSection;
