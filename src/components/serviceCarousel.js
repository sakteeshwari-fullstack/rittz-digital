import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const services = [
  {
    img: "/assets/Our Services.png",
    title: "Digital Product\nStrategy",
  },
  {
    img: "/assets/Our Services 1.png",
    title: "UI/UX Design &\nPrototyping",
  },
  {
    img: "/assets/Our Services.png",
    title: "Backend Development\n& API Integration",
  },
  {
    img: "/assets/Our Services 1.png",
    title: "Cloud-Based\nSolutions",
  },
  {
    img: "/assets/Our Services.png",
    title: "Ongoing Maintenance\n& Support",
  },
  {
    img: "/assets/Our Services 1.png",
    title: "Custom Mobile App\nDevelopment",
  },
];

const Card = ({ img, title }) => (
  <div className="relative py-5  text-black transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 w-full sm:max-w-[240px] max-w-[200px] mx-auto">
    <img src={img} alt={title} className="w-full h-auto rounded-xl" />
    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-medium mt-3 whitespace-pre-line text-sm sm:text-base">
      {title}
    </p>
  </div>
);

export default function ServiceCarousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="w-full ">
      {isMobile ? (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.1}
          autoplay={{ delay: 2500 }}
          loop={true}
          grabCursor={true}
          className="w-fullpx-4 pl-5"
        >
          {services.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Card img={item.img} title={item.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid  py-5 grid-cols-1 overflow-x-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4 px-4">
          {services.map((item, idx) => (
            <Card key={idx} img={item.img} title={item.title} />
          ))}
        </div>
      )}
    </div>
  );
}
