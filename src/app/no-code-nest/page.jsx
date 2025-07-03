import React from "react";
import Hero from "./Hero";
import OneMinute from "./OneMinute";
import FeatureSection from "./FeatureSection";
import Pitch from "./Pitch";
import Testimonial from "./testimonial";
import CallToAction from "./CallToAction";

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
