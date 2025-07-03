'use client';

import { useEffect, useState } from 'react';

export default function PhotoLoop({ index, photos, bgColor,className }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos?.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className='relative w-full lg:grow'>
      {/* Top background circle */}
      <div className={`absolute rounded-full h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 ${
          index % 2 === 0
            ? 'top-0 left-0 -translate-1/2'
            : 'top-0 right-0 -translate-y-1/2 translate-x-1/2'
        }`} style={{ backgroundColor: bgColor }}/>
      {/* Bottom background circle */}
      <div className={`absolute  rounded-full h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 ${
          index % 2 === 0
            ? 'bottom-0 right-0 translate-1/2'
            : 'bottom-0 left-0 translate-y-1/2 -translate-x-1/2'
        }`} style={{ backgroundColor: bgColor }} />
      <div
      className={` relative z-10 rounded-3xl w-full lg:grow bg-white self-center flex items-center justify-center shadow-xl ${className} `}
    >
      {photos?.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Slide ${idx}`}
          className={`p-2 rounded-3xl w-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0 absolute'
          }`}
        />
      ))}
    </div>

    </div>
  );
}
