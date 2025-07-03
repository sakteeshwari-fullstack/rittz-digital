import React from "react";

export default function Testimonial() {
  return (
    <div className="min-h-screen w-full text-black flex items-center justify-center overflow-hidden">
      <div className="absolute h-[90vh] w-[90vw] bg-white rounded-4xl shadow-xl">
        {[
          {
            src: "/assets/img1.jpg",
            className: `
              top-[15%] left-[5%]
              sm:top-[17%]
              md:top-[20%]
              xl:top-[20%] xl:left-[5%]
              at-980-1279:width-15p
            `,
          },
          {
            src: "/assets/img3.jpg",
            className: `
              bottom-[31%] left-[5%] opacity-0
              xl:bottom-[31%] xl:top-[47%] xl:left-[5%] xl:opacity-100
            `,
          },
          {
            src: "/assets/img8.avif",
            className: `
              top-[27.8%] left-[5%]
              sm:left-[5%] sm:top-[38.7%]
              md:top-[43%]
              xl:left-[14%] xl:top-[45.2%]
              at-830-979:top-40 at-980-1279:width-15p at-980-1279:top-40
            `,
          },
          {
            src: "/assets/img11.jpg",
            className: `
              top-[11%] left-[14%] opacity-0
              sm:left-[23%] sm:top-[11.2%]
              xl:left-[14%] xl:top-[12.2%] xl:opacity-100
              at-980-1279:opacity-100
            `,
          },
          {
            src: "/assets/img13.avif",
            className: `
              top-[19%] left-[23%]
              sm:top-[30%]
              md:left-[22.8%]
              xl:top-[19.5%] xl:left-[23%]
              at-980-1279:width-15p
            `,
          },
          {
            src: "/assets/img7.avif",
            className: `
              top-[6%] left-[23%]
              sm:opacity-0
              xl:top-[8.5%] xl:left-[32%] xl:opacity-100
            `,
          },
          {
            src: "/assets/img5.jpeg",
            className: `
              top-[16%] left-[41.3%]
              sm:opacity-0
              xl:top-[16.3%] xl:left-[41%] xl:opacity-100
            `,
          },
          {
            src: "/assets/img14.jpg",
            className: `
              top-[3%] left-[41.3%] w-[60px]
              sm:left-[41.3%] sm:w-[100px] sm:top-[23%]
              md:left-[41%] md:w-[123px]
              xl:top-[3%] xl:left-[50%] xl:w-[104px]
              at-830:left-8 at-830-979:width-145p img14-980-1279
            `,
          },
          {
            src: "/assets/img2.jpg",
            className: `
              top-[15%] right-[5%]
              sm:top-[17%]
              md:top-[20%]
              xl:top-[22%] xl:right-[5%]
              at-980-1279:width-15p
            `,
          },
          {
            src: "/assets/img6.jpeg",
            className: `
              top-[27.8%] right-[5%]
              sm:top-[38.7%]
              md:top-[43%] 
              xl:top-[49.3%] xl:right-[5%]
              at-980-1279:width-15p img6-980-1279
            `,
          },
          {
            src: "/assets/img12.jpg",
            className: `
              top-[36%] right-[15%] opacity-0
              sm:opacity-0
              xl:top-[39%] xl:right-[14%] xl:opacity-100
            `,
          },
          {
            src: "/assets/img10.jpg",
            className: `
              top-[11%] right-[14%] opacity-0
              sm:opacity-0
              xl:top-[12%] xl:right-[14%] xl:opacity-100
            `,
          },
          {
            src: "/assets/img4.jpeg",
            className: `
              top-[19%] right-[23%]
              sm:top-[30%]
              md:right-[22.5%] md:right-[23%]
              xl:top-[20%] xl:right-[23%]
              at-980-1279:width-15p
            `,
          },
          {
            src: "/assets/img9.jpg",
            className: `
              top-[6%] right-[23%]
              sm:top-[11.2%] sm:right-[22%] sm:opacity-0
              xl:top-[8.5%] xl:right-[32.2%] xl:opacity-100
            `,
          },
        ].map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`img${i + 1}`}
            className={`
              absolute ${img.className}
              h-[70px] w-[60px]
              sm:h-[120px] sm:w-[100px]
              md:h-[130px] md:w-[120px]
              xl:h-[160px] xl:w-[111px]
              object-cover rounded-xl shadow-md
              transition-transform duration-300 ease-in-out
              hover:scale-100 hover:translate-y-2
            `}
          />
        ))}

        <div className="absolute h-[128px] w-[120px] bg-gray-50 rounded-b-xl left-[5%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[118px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[70px] w-[120px] bg-gray-50 rounded-b-xl left-[14%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[70px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[115px] w-[120px] bg-gray-50 rounded-b-xl left-[23%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[115px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[49px] w-[120px] bg-gray-50 rounded-b-xl left-[32%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[49px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[95px] w-[120px] bg-gray-50 rounded-b-xl left-[41%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[95px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[16px] w-[124px] bg-gray-50 rounded-b-xl left-[50%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[16px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[49px] w-[120px] bg-gray-50 rounded-b-xl right-[32%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[49px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[115px] w-[120px] bg-gray-50 rounded-b-xl right-[23%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[115px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[70px] w-[120px] bg-gray-50 rounded-b-xl right-[14%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[69px] xl:w-[111px] xl:opacity-100"></div>
        <div className="absolute h-[128px] w-[120px] bg-gray-50 rounded-b-xl right-[5%] opacity-0 sm:h-[90px] sm:w-[70px] sm:opacity-0 xl:h-[128px] xl:w-[111px] xl:opacity-100"></div>

      <div
  className="absolute top-[45%] left-1/2 -translate-x-1/2 
             text-[2rem] leading-[1.3] text-center font-bold 
             max-w-[90%] w-[90%] 

             sm:text-[2rem] sm:top-[58%]
             md:text-[2.3rem] md:top-[59%]
             lg:text-[2.6rem] lg:top-[55%]
             xl:text-[3rem]"
>
  Trusted By Leaders <br />
  <span className="text-green-600">From Various Industries</span>
</div>

<p
  className="absolute bottom-[24%] left-1/2 -translate-x-1/2
             text-[0.8rem] text-center text-black leading-[1.5]
             max-w-[90%] w-[90%] break-words tracking-tight

             sm:text-[1rem] sm:bottom-[18%]
             md:text-[1rem] md:bottom-[15%]
             lg:text-[1.1rem]
             xl:text-[1.2rem]"
>
  Learn why professionals trust our solutions to
  <br /> complete their customer journeys.
</p>




        <button
          className="absolute left-[30%] bottom-[12%] at-500-639:bottom-16  px-6 py-3 text-green-800 font-semibold rounded-xl
  sm:left-[38%] sm:bottom-[6%]
  md:bottom-[6%]
  xl:left-[45%] xl:bottom-[7%]
  at-830-979:ml-12 at-830-979:bottom-40
  at-980-1124:ml-44 at-980-1124:mt-44
  bg-[#e0f5ec] shadow-[8px_8px_15px_#c2ded1,-8px_-8px_15px_#ffffff]
  hover:shadow-[inset_8px_8px_15px_#c2ded1,inset_-8px_-8px_15px_#ffffff]
  transition-all duration-300"
        >
          Testimonials
        </button>
      </div>
    </div>
  );
}