'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import RotatingCards from './RotatingCards';
import Header from './header';
import ModelWithMaterial from './ModelViewer';
import CloudBlastScene from './ui/cloudBlast';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const yellowRef = useRef(null);
  const contentRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: yellowRef.current,
  //         start: "top 50%",
  //         end: "+=200",
  //         // markers:true,
  //         scrub: true,
  //         onEnter: () => {
  //           if (contentRef.current) {
  //             contentRef.current.style.display = 'flex';
  //             gsap.fromTo(
  //               contentRef.current.children,
  //               { y: 100, opacity: 0 },
  //               {
  //                 y: 0,
  //                 opacity: 1,
  //                 stagger: 0.3,
  //                 duration: 0.5,
  //                 ease: "power3.out"
  //               }
  //             );
  //           }
  //         },
  //         onLeaveBack: () => {
  //           if (contentRef.current) {
  //             gsap.to(contentRef.current.children, {
  //               y: 100,
  //               opacity: 0,
  //               duration: 0.5,
  //               onComplete: () => {
  //                 contentRef.current.style.display = 'none';
  //               }
  //             });
  //           }
  //           gsap.to(yellowRef.current, {
  //             scale: 1,
  //             duration: 0.6,
  //             ease: 'power2.out'
  //           });
  //         }
  //       }
  //     });

  //     gsap.to(yellowRef.current, {
  //       scale: 50,
  //       scrollTrigger: {
  //         trigger: yellowRef.current,
  //         start: "top 50%",  
  //         end:"top 40%",        
  //         // markers:true,
  //         scrub: true,
  //       }
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

 const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

     
      const offsetX = (e.clientX - centerX) * 0.01;
      const offsetY = (e.clientY - centerY)  * 0.01;

      setOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <div >
    <div
  className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{ backgroundImage: "url('/assets/freepik__the-style-is-candid-image-photography-with-natural__39812.jpeg.jpg')" }}
>
      <div className=' relative'>
        <Header/>
        <div className='  absolute  top-[10rem] left-[0.8rem]  sm:top-[15rem] md:left-[5rem]'>                
          <h1 className='md:text-5xl lg:text-7xl sm:text-5xl text-3xl  font-bold leading-[1.3]'> <span className="font-bold text-5xl sm:text-7xl md:text-9xl ">W</span>e Build Products <br/> That Scale <span className='inline-block w-10 h-1 bg-white mb-2.5'></span> <br/>No Code Required.</h1>
        </div>
      </div>
      {/* Corner dots */}
      <div className="absolute w-fit bottom-6/12 md:bottom-7/12 right-0 space-x-2 space-y-2 flex flex-col items-end z-10">
     {/* <div className="w-36 h-36 md:w-44 md:h-44 -top-28 -right-20 md:-top-36 md:-right-20  absolute rounded-full bg-[#EB4132]"></div>         */}
        <div className="w-28 h-28 md:w-40 md:h-40 absolute right-8 top-2 md:right-10 z-[9999]">
  {/* <div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-0 ease-linear"
    style={{
      transform: `translate(calc(-00% + ${offset.x}px), calc(-0% + ${offset.y}px))`,
    }}
  >
 
    <div className="relative w-40 h-40 rounded-full bg-blue-600 overflow-hidden flex items-center justify-center">
     
      <img
        src="/assets/human head.png"
        alt="Blue Glow"
        className="absolute inset-0 w-full h-full z-0"
      />
      

    <div className="absolute w-4 h-4  item-center justify-center  flex  gap-10"
     style={{
      transform: `translate(calc(-00% + ${offset.x}px), calc(-0% + ${offset.y}px))`,
    }}
    >
      
      <img
        src="/assets/Group 1000003254.png"
        //  className="w-12 h-12"
        alt="eye"
      />
      <div className="absolute w-10 h-10 bg-black rounded-full top-10"
      ></div>
      <img
        src="/assets/Group 1000003254.png"
        alt="eye"
      /></div>
    </div>
  </div> */}

  <div>
    <div>
<ModelWithMaterial />

    </div>


      {/* <div>
        <CloudBlastScene/>
      </div> */}

    </div>
</div>
      {/* <div  className="w-28 h-28 md:w-44 absolute md:h-44 top-24 -right-12 md:top-32 md:-right-20 rounded-full bg-[#31AA52]"></div> */}

       
        
      </div>

      {/* Rotating content section */}
      {/* <div
        ref={contentRef}
        className="hidden flex-col items-center justify-center w-full h-full absolute top-0 left-0 z-999"
      >
        <RotatingCards />
      </div> */}
    </div>

    
    </div>
  );
};

export default HeroSection;