'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RotatingCards = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const wrapperRef = useRef(null); 

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current, 
          start: 'top 60%',
          end: '+=1150',
          scrub: true,
          pin: true,
          // markers: true,
        },
      });

      tl.fromTo(
        card1Ref.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      tl.to(card1Ref.current, {
        opacity: 0,
        y: -100,
        duration: 0.5,
        ease: 'power3.inOut',
      });

      tl.fromTo(
        card2Ref.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full h-[200vh]">
      {/* Card 1 */}
      <div
        ref={card1Ref}
        className="absolute top-1/2 left-1/2 mt-44 w-screen   max-w-[1100px] transform -translate-x-1/2 -translate-y-1/2 sm:h-96 py-10 sm:py-0 bg-[#EB4132] backdrop-blur-md text-white flex flex-col sm:flex-row justify-between items-center sm:px-10 rounded-2xl shadow-2xl min-w-0"
      >
        <div className="sm:w-2/3 w-10/12">
          <h2 className="sm:text-5xl text-2xl font-bold mb-3 text-black">Behind the Brand</h2>
          <p className="text-gray-200 font-bold leading-[1.3] sm:text-4xl text-2xl">We are not afraid. We are <br/> your partners. <br/> We build unique with you.</p>
        </div>
        <div className="w-1/3 flex justify-center">
          <img src="/assets/card1Logo.svg" alt="Logo 1" className="w-48 h-48 object-contain" />
        </div>
      </div>

      {/* Card 2 */}
      <div
        ref={card2Ref}
        className="absolute top-1/2 mt-52 md:mt-20 left-1/2 w-screen   max-w-[1100px] transform -translate-x-1/2 -translate-y-1/2 sm:h-96 py-10 sm:px-10 bg-[#268b41] backdrop-blur-md text-white flex flex-col sm:flex-row justify-between items-center rounded-2xl shadow-2xl opacity-0 min-w-0"
      >
        <div className="w-2/3 sm:11/12 hidden sm:block">
          <h2 className="sm:text-5xl text-2xl font-bold mb-3 text-[#EAAA00]">Behind The Brand,</h2>
          <p className=" text-black font-bold leading-[1.3] sm:text-4xl text-2xl">We <span className='text-[#EAAA00]'>Blend Design</span>,Tech and Creativity <br/> to build <span className='text-[#EAAA00]'>Products</span>  that put <br/> Customers first.</p>
        </div>
         <div className="w-2/3 sm:11/12 block sm:hidden">
          <h2 className="sm:text-5xl text-2xl font-bold mb-3 text-[#EAAA00] text-nowrap">Behind The Brand,</h2>
          <p className=" text-black font-bold leading-[1.3] sm:text-4xl text-2xl">We <span className='text-[#EAAA00]'>Blend Design</span>,Tech and Creativity to build <span className='text-[#EAAA00]'>Products</span>  that put customers first.</p>
        </div>
        <div className="w-1/3 flex justify-center">
          <img src="/assets/card1Logo.svg" alt="Logo 2" className="w-48 h-48 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default RotatingCards;
