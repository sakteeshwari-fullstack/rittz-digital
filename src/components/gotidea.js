export default function Gotidea() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 sm:px-10 md:px-16 py-12 bg-white">
      {/* Left Text */}
      <div className="text-center lg:text-left w-full lg:w-1/2">
        <h2 className="text-[clamp(2rem,6vw,4rem)] font-light text-gray-700 leading-snug">
          <span className="text-green-600 font-bold">G</span>ot an idea in mind?
          <br />
          Let’s make it real.
        </h2>
      </div>

      {/* Right Button */}
      <div className="w-full lg:w-auto flex justify-center lg:justify-end">
        <button className="w-full sm:w-[20rem] md:w-[24rem] px-6 py-3 cursor-pointer text-sm sm:text-base border border-gray-400 text-black relative overflow-hidden group">
          <span
            className="absolute bottom-0 left-0 w-0 h-0 bg-black rounded-full transition-all duration-400 ease-out group-hover:w-[60rem] group-hover:h-[60rem]"
            style={{ transform: "translate(-50%, 50%)" }}
          ></span>
          <span className="relative z-10 transition-all duration-300 group-hover:text-white">
            Say Hello
          </span>
        </button>
      </div>
    </div>
  );
}











