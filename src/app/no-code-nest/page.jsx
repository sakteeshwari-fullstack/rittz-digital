import React from "react";
import Hero from "./Hero";
import OneMinute from "./OneMinute";
import FeatureSection from "./FeatureSection";
import Pitch from "./Pitch";
import Testimonial from "./testimonial";
import CallToAction from "./CallToAction";

export const metadata = {
  title: "Dynamic Pricing Management Software in Chennai ",
  description: "Automate pricing based on live data with dynamic pricing software in Chennai. Boost profits with real-time rate updates and smart rules."
};

export default function Page() {
  return (
  <div className="restrict overflow-hidden font-poppins bg-[#F9FAFB]">
      <Hero />
      <OneMinute/>
      <FeatureSection />
      <Pitch/>
      <Testimonial /> 
      <CallToAction/>
    </div>
  );
}
