"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/navigation";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const DATA = [
  {
    name: "Jay",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    project: "UI/UX",
    company: "Self‑employed",
    rating: 5,
    text: "Excellent experience, exceeded my expectations",
  },
  {
    name: "Alice",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    project: "Website Redesign",
    company: "Freelancer",
    rating: 4,
    text: "Amazing collaboration and fast delivery",
  },
  {
    name: "David",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    project: "Mobile App",
    company: "Startup Co.",
    rating: 5,
    text: "Their professionalism and creativity really stood out.",
  },
  {
    name: "Sara",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    project: "Brand Identity",
    company: "Marketing Pro",
    rating: 4,
    text: "Great attention to detail and easy communication!",
  },
  {
    name: "Tom",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    project: "E-commerce Website",
    company: "Shopify Seller",
    rating: 5,
    text: "Super smooth process — I highly recommend them!",
  },
  {
    name: "Nina",
    img: "https://randomuser.me/api/portraits/women/40.jpg",
    project: "Landing Page",
    company: "Solo Founder",
    rating: 4,
    text: "Quick delivery and amazing designs, thank you!",
  },
];

function Testimonials() {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll(".letter");

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
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  const heading = "Testimonials";

  return (
    <section className="bg-white w-full py-16 px-4 sm:px-6 md:px-16 relative overflow-hidden">
  {/* Section Title */}
  <div className="text-center md:text-right md:absolute md:top-10 md:right-10 z-20">
    <h2
      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-4"
      ref={textRef}
    >
      {heading.split("").map((char, i) => (
        <span
          key={i}
          className={`overflow-hidden inline-block ${
            char === "T" ? "text-yellow-400" : "text-black"
          }`}
        >
          <span className="letter inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </h2>

    <div className="flex justify-center md:justify-end items-center mt-2 md:mr-4">
      <div className="h-0.5 w-24 sm:w-36 bg-gray-400 mr-4"></div>
      <p className="text-xs sm:text-sm text-black text-left leading-tight">
        Trusted By Innovators, <br />
        Loved By Clients.
      </p>
    </div>
  </div>

  {/* Red Background Accent */}
  <div className="hidden lg:block bg-red-500 w-[53rem] h-[30rem] absolute right-0 top-[11rem] rounded-tl-[100px] rounded-br-[100px] z-0"></div>

  {/* Swiper + Card Layout */}
  <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-32 md:mt-44 relative z-10">
    {/* Swiper */}
    <div className="w-full max-w-md sm:max-w-lg px-4">
      <Swiper
        navigation={{ prevEl: ".btn-prev", nextEl: ".btn-next" }}
        modules={[Navigation]}
        slidesPerView={1}
        className="w-full"
      >
        {DATA.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative bg-white rounded-xl shadow-xl px-6 sm:px-8 py-10 pt-12">
              <div className="absolute top-0 left-0 w-full h-6 bg-black rounded-t-xl flex items-center px-3 gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex flex-wrap gap-2 mb-4 mt-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  Project: <span className="text-blue-600">{item.project}</span>
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  Company:{" "}
                  <span className="text-yellow-600">{item.company}</span>
                </span>
              </div>
              <p className="text-gray-800 text-sm mb-3">{item.text}</p>
              <div className="flex text-yellow-400 mb-4">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
              <div className="border-t pt-2">
                <span className="text-sm font-semibold block mb-2">
                  {item.name}
                </span>
                <button className="bg-black text-white text-xs px-4 py-2 hover:opacity-90 transition">
                  Hear Their Story
                </button>
              </div>
              <img
                src={item.img}
                alt={item.name}
                className="absolute bottom-3 right-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex gap-4 mt-6 justify-center sm:justify-start">
        <button className="btn-prev w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xl text-black">
          <FaArrowLeft />
        </button>
        <button className="btn-next w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-xl text-black">
          <FaArrowRight />
        </button>
      </div>
    </div>

    {/* Text Block */}
    <div className="bg-gray-500/40 backdrop-blur-md border border-white/20 shadow-md rounded-br-[50px] rounded-tl-[50px] p-6 sm:p-8 max-w-xl">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
        What Our Clients Say
      </h3>
      <p className="text-base sm:text-lg mb-4 text-center md:text-left">
        Building Digital Products That Make an Impact — Together.
      </p>
      <p className="text-sm sm:text-base leading-relaxed text-center md:text-left">
        At Ritz Digital, we don’t just create solutions — we build trusted
        partnerships. But don’t just take our word for it. Hear from the
        businesses who’ve worked with us and experienced the difference we make.
      </p>
    </div>
  </div>
</section>

  );
}

export default Testimonials;