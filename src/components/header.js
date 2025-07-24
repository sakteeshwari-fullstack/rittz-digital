"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./contact";
import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// import gsap from "gsap";
import { useRef,useState,useEffect } from "react";
import gsap from "gsap";



export default function Header() {
  const [showContact, setShowContact] = React.useState(false);
  const lottieRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);


  const handleContactClick = () => setShowContact((prev) => !prev);
  const handleClose = () => setShowContact(false);

  const [isVisible, setIsVisible] = useState(false);
  //  const shoot = () => {
//    useEffect(() => {
//   // Initially hide it above
//   gsap.set(lottieRef.current, {
//     y: -100,
//     top: 100, // start position
//     opacity: 0,
//   });
// }, []);

const shoot = () => {
  if (!isVisible) {
    // Slide down
    gsap.to(lottieRef.current, {
      y: 250, // how far down to come
      opacity: 1,
      stagger: 0.1,
      duration: 0.4,
      ease: "power4.out",
    });
  } else {
    // Slide back up
    gsap.to(lottieRef.current, {
      y: 0,
      // opacity: 0,
      duration: 0.4,
      ease: "power4.in",
    });
  }

  setIsVisible(!isVisible);
};
  
const [played, setPlayed] = useState(false);

  const handleClick = () => {
    if (!played) {
      lottieRef.current?.play();
      setPlayed(true);
    } else {
      lottieRef.current?.stop(); // Reset if clicked again
      setPlayed(false);
    }
  };

//  const [offset, setOffset] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const centerX = window.innerWidth / 2;
//       const centerY = window.innerHeight / 2;

     
//       const offsetX = (e.clientX - centerX) * 0.10;
//       const offsetY = (e.clientY - centerY) * 0.10;

//       setOffset({ x: offsetX, y: offsetY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);
  
  

  return (
    <>
      <header className="w-full px-4 sm:px-6  md:px-10 py-3 pt-6 sm:py-4 md:py-5 flex items-center justify-between bg-transparent z-40">
        <h1 className="hidden">Best E-commerce Website Development Company in Chennai </h1>
        <h2 className="hidden">Best  Website Development Company in Chennai</h2>
        <div className="flex items-center">
          <img
            src="/assets/Group 1000003312.png"
            alt="Rittz Logo"
            className="w-20 sm:w-24 md:w-28 object-contain"
          />
        </div>

       
        {/* <div>
           <DotLottieReact
      src="https://lottie.host/70af573b-6a81-4419-aaa1-1fe2c6221166/NN0JQELHYp.lottie"
      loop
      autoplay
    />
        </div> */}
        

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
           <div
    className="group relative  p-4 rounded-2xl backdrop-blur-xl border-2 border-indigo-500/30 bg-gradient-to-br from-indigo-900/40 via-black-900/60 to-black/80 shadow-2xl hover:shadow-indigo-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-400/60 overflow-hidden"
    onClick={handleContactClick}
  >
    <div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
    ></div>

    <div
      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-indigo-400/20 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>

    <div className="relative z-10 flex items-center gap-4">
     
        
      </div>
      <div className="flex-1 text-left">
        <p
          className="text-indigo-400 font-bold text-lg group-hover:text-indigo-300 transition-colors duration-300 drop-shadow-sm"
        >
          Talk to us
        </p>
      </div>
      <div
        className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
      >
      </div>
    </div>
  

          {/* <Link
            href="/no-code-nest"
            className="px-3 hidden sm:block sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-emerald-500 text-white border border-emerald-600 rounded-md relative overflow-hidden group"
          >
            <span
              className="absolute bottom-0 left-0 w-0 h-0 bg-emerald-600 rounded-full transition-all duration-300 ease-out group-hover:w-[60rem] group-hover:h-[60rem]"
              style={{ transform: "translate(-50%, 50%)" }}
            ></span>
            <span className="relative z-10 transition-colors duration-200 font-semibold group-hover:text-white">
              NoCodeNest
            </span>
          </Link> */}

          {/* <span className="text-sm hidden sm:block sm:text-base md:text-lg font-semibold text-black">
            Menu
          </span> */}
{/* 
          <div className="w-5 sm:w-6 cursor-pointer h-5 sm:h-6">
            <img
              src="/assets/align-justify.png"
              alt="Menu Icon"
              className="w-full h-full object-contain"
            />
          </div> */}
        </div>
      </header>
     <div
  ref={lottieRef}
  className="z-50 bg-[#b2eb15] w-80 h-60  inset-0 fixed top-[-220px] opacity-100 rounded-4xl flex flex-col items-center justify-center text-start cursor-pointer ml-35 md:ml-140 sm:ml-20 lg:ml-150"
>
  <div className="mt-[-130px] mr-0 grid grid-cols-1 gap-2">
  
  <div className="relative h-5 overflow-hidden group" onClick={handleContactClick}>
    <p className="text-black text-sm transition-transform duration-400 group-hover:-translate-y-5">
      TALK TO US
    </p>
    <p className="text-black text-sm absolute top-5 left-0  transition-transform duration-400 group-hover:-translate-y-5">
      TALK TO US
    </p>
  </div>


  <div className="w-70 h-px bg-black" />

  
  <Link
   href="/no-code-nest"
   className="relative h-5 overflow-hidden group">
    
    <p className="text-black text-sm transition-transform duration-500 group-hover:-translate-y-5">
      NOCODENEST
    </p>
    <p className="text-black text-sm absolute top-5 left-0  transition-transform duration-500 group-hover:-translate-y-5">
      NOCODENEST
    </p>
  </Link>

  

  <div className="w-70 h-px bg-black" />
</div>

<div className="absolute flex flex-row gap-4 z-999 mt-45"> 
  <img src="/assets/youtube icon.svg" alt=""  className="transition-transform duration-300 hover:-translate-y-2"/>
  <img src="/assets/twitter icon.svg" alt=""  className="transition-transform duration-300 hover:-translate-y-2" />
  <img src="/assets/discard icon.svg" alt="" className="transition-transform duration-300 hover:-translate-y-2" />
  <img src="/assets/insta icon.svg" alt="" className="transition-transform duration-300 hover:-translate-y-2"/>
</div>

  <div className="absolute mt-55 w-60 h-20">
  <img src="/assets/63bf3e1c32ea7b76861bdfb5_menu (2).svg" alt="bg-img" />
    <DotLottieReact
  src="https://lottie.host/70af573b-6a81-4419-aaa1-1fe2c6221166/NN0JQELHYp.lottie"
  loop={false}                  
  autoplay={false}              
  // lottieRef={lottieRef}         
  className="w-20 h-10 ml-20 mt-[-40]"
   onClick={shoot}
/>
  </div> 


</div>

      

      <AnimatePresence>
        {showContact && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: 90 }}
            transition={{
              duration: 0.7,
              ease: [0.65, 0, 0.35, 1],
            }}
          >
            <Contact onClose={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}