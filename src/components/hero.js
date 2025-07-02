'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import RotatingCards from './RotatingCards';
import Header from './header';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const yellowRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: yellowRef.current,
          start: "top 50%",
          end: "+=200",
          // markers:true,
          scrub: true,
          onEnter: () => {
            if (contentRef.current) {
              contentRef.current.style.display = 'flex';
              gsap.fromTo(
                contentRef.current.children,
                { y: 100, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  stagger: 0.3,
                  duration: 1,
                  ease: "power3.out"
                }
              );
            }
          },
          onLeaveBack: () => {
            if (contentRef.current) {
              gsap.to(contentRef.current.children, {
                y: 100,
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                  contentRef.current.style.display = 'none';
                }
              });
            }
            gsap.to(yellowRef.current, {
              scale: 1,
              duration: 0.6,
              ease: 'power2.out'
            });
          }
        }
      });

      gsap.to(yellowRef.current, {
        scale: 50,
        scrollTrigger: {
          trigger: yellowRef.current,
          start: "top 55%",  
          end:"top 40%",        
          // markers:true,
          scrub: true,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div >
    <div className="relative h-[150vh] w-full bg-[#B91B4A] overflow-hidden">
      <div className=' relative'>
        <Header/>
        <div className='  absolute  top-[10rem] left-[0.8rem]  sm:top-[15rem] md:left-[5rem]'>                
          <h1 className='md:text-5xl lg:text-7xl sm:text-5xl text-3xl  font-bold leading-[1.3]'> <span className="font-bold text-5xl sm:text-7xl md:text-9xl ">W</span>e Build Products <br/> That Scale <span className='inline-block w-10 h-1 bg-white mb-2.5'></span> <br/>No Code Required.</h1>
        </div>
      </div>
      {/* Corner dots */}
      <div className="absolute w-fit bottom-6/12 md:bottom-7/12 right-0 space-x-2 space-y-2 flex flex-col items-end z-10">
     <div className="w-36 h-36 md:w-44 md:h-44 -top-28 -right-20 md:-top-36 md:-right-20  absolute rounded-full bg-[#EB4132]"></div>        
      <div ref={yellowRef} className="w-28 h-28 md:w-40 md:h-40 absolute right-8 top-2 md:right-10 z-[9999] rounded-full bg-[#cba22f] transition-transform duration-1000"
      ></div>
      <div  className="w-28 h-28 md:w-44 absolute md:h-44 top-24 -right-12 md:top-32 md:-right-20 rounded-full bg-[#31AA52]"></div>
        
      </div>

      {/* Rotating content section */}
      <div
        ref={contentRef}
        className="hidden flex-col items-center justify-center w-full h-full absolute top-0 left-0 z-30"
      >
        <RotatingCards />
      </div>
    </div>

    
    </div>
  );
};

export default HeroSection;

