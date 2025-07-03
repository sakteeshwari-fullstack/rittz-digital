"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Brand() {
  const cubeRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const bottomTextRef = useRef(null);
  const imageRef = useRef(null);
  const bottomImageRef = useRef(null);

  useEffect(() => {
    const cube = cubeRef.current;
    const hero = heroRef.current;
    const text = textRef.current;
    const bottomText = bottomTextRef.current;
    const image = imageRef.current;
    const bottomImage = bottomImageRef.current;
    const imageContainer = imageRef.current;
    const images = imageContainer.querySelectorAll("img");

    const polygon = imageContainer.querySelector('img[src*="Rectangle"]');
    const bottomImages = bottomImageRef.current.querySelectorAll("img");

bottomImages.forEach((img, i) => {
  const src = img.getAttribute("src");

  
  if (src.includes("Rectangle 4206")) {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(img, {
      rotate: "+=180",
      scale: 1.15,
      ease: "power2.inOut",
      duration: 3, 
    }).to(img, {
      rotate: 60, 
      scale: 1,
      ease: "bounce.out",
      duration: 2,
    });
    return;
  }

  if (src.includes("Polygon")) {
    gsap.to(img, {
      scale: 1.1,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
    return;
  }

  const floatX = 10 + Math.random() * 5;
  const floatY = 15 + Math.random() * 5;
  const rot = 5 + Math.random() * 10;

  const tl = gsap.timeline({ repeat: -1, yoyo: true, delay: i * 0.3 });

  tl.to(img, {
    x: i % 2 === 0 ? floatX : -floatX,
    y: i % 2 === 0 ? -floatY : floatY,
    rotation: i % 2 === 0 ? rot : -rot,
    scale: 1.05,
    ease: "sine.inOut",
    duration: 2.2 + Math.random(),
  }).to(img, {
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    ease: "expo.out",
    duration: 1.8,
  });
});


    gsap.set([text, image], { y: -50, opacity: 0 });

    
    images.forEach((img, i) => {
      if (img === polygon) return;
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(img, {
        y: i % 2 === 0 ? -15 : 15,
        rotation: i % 2 === 0 ? 10 : -10,
        scale: 1.05,
        ease: "back.out(1.7)",
        duration: 1.4 + Math.random(),
      }).to(img, {
        y: 0,
        rotation: 0,
        scale: 1,
        ease: "bounce.out",
        duration: 1.2 + Math.random(),
      });
    });

    gsap.to(polygon, {
      scale: 1.2,
      duration: 1.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cube,
        start: "top -30%",
        end: "bottom top",
        scrub: 2,
      },
    });

    tl.to(
      [text, image],
      {
        opacity: 1,
        y: 0,
        duration: 0.1,
        ease: "power2.out",
      },
      +0.1
    )
      .to(
        cube,
        {
          rotateX: -90,
          y: 0,
          ease: "power2.inOut",
          duration: 1.2,
        },
        0.35
      )
      .to(
        [text, image],
        {
          opacity: 0,
          duration: 0.2,
          ease: "power1.out",
        },
        0.6
      )
      .to(
        [bottomText, bottomImage],
        {
          opacity: 1,
          y: -20,
          duration: 0.5,
          ease: "power1.out",
        },
        0.8
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={heroRef}
      style={{ perspective: "1300px" }}
      className="flex flex-row justify-center items-center h-[120vh] "
    >
      <div
        ref={textRef}
        className="absolute  top-44 lg:top-96 text-left w-full z-10 transition-opacity duration-300 opacity-100"
      > 
        <p className="sm:text-[2rem] text-[1.5rem] font-semibold text-gray-800">
          Behind The Brand
        </p>
        <h2 className="sm:text-[2.5rem] text-[2.1rem] font-semibold leading-[1.3] sm:leading-snug">
          We are not afraid. we are <br />
          your partners. <br />
          we build unique with you.
        </h2>
      </div>

      <div
        ref={imageRef}
        className="absolute mr-[-4rem] transition-opacity duration-300  border-black bottom-40 sm:bottom-52 right-16 sm:right-[12rem] w-60 h-60 bg-white rounded-md z-10 opacity-100"
      >
        <img
          src="/assets/Rectangle 4206.png"
          alt="Brand Graphic"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <img
          src="/assets/Rectangle 4207.png"
          alt="Brand Graphic"
          className="absolute bottom-21 right-22"
        />
        <img
          src="/assets/Ellipse 60.png"
          alt="Brand Graphic"
          className="absolute bottom-34 right-25"
        />
        <img
          src="/assets/Polygon 1.png"
          alt="Brand Graphic"
          className="absolute top-33 left-22"
        />
      </div>

      <div
        ref={bottomImageRef}
        className="absolute sm:top-[20rem] top-40 sm:mr-[-54rem] transition-opacity duration-300  w-60 h-60 bg-white border border-yellow-500 rounded-md z-10 opacity-0"
      >
        <img
          src="/assets/Rectangle 4206.png"
          alt="Brand Graphic"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[60deg]"
        />
        <img
          src="/assets/Rectangle 4207.png"
          alt="Brand Graphic"
          className="absolute bottom-22 right-15"
        />
        <img
          src="/assets/Ellipse 60.png"
          alt="Brand Graphic"
          className="absolute bottom-18 right-28"
        />
        <img
          src="/assets/Polygon 1.png"
          alt="Brand Graphic"
          className="absolute top-10 left-18.5"
        />
      </div>

      <div
        ref={bottomTextRef}
        className="absolute top-[28rem] sm:top-[20rem] transition-opacity duration-300 opacity-0  text-left w-full z-10"
      >
        <p className="text-[1.5rem] sm:text-[2rem] font-semibold text-yellow-500">
          Behind The Brand
        </p>
        <p className="sm:text-[2.5rem] text-[1.9rem] text-black font-semibold">
          we <span className="text-yellow-500 font-semibold">blend design</span>
          , tech, and creativity
          <br />
          to build{" "}
          <span className="text-yellow-500 font-semibold">products</span> that
          put
          <br />
          customers first.
        </p>
      </div>

      <div
        ref={cubeRef}
        className="relative w-[17rem] sm:w-[70rem] h-[30rem] sm:mr-[3rem] -mr-5 sm:-mr-0  rounded-[40px] transform-style-preserve-3d "
        style={{ transformStyle: "preserve-3d" }}
      >
        
        <div
          className="absolute w-full h-full rounded-[40px] bg-amber-500 p-20 flex items-center justify-between text-white"
          style={{ transform: "translateZ(244px)" }}
        ></div>

        
        <div
          className="bg-[#f5f0e3] rounded-[40px]  p-20 flex items-center justify-between h-full top-20max-h-[488px]"
          style={{
            transform: "rotateX(90deg) translateZ(244px)",
            backfaceVisibility: "hidden",
          }}
        ></div>
      </div>
    </div>
  );
}