"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./contact";

export default function Header() {
  const [showContact, setShowContact] = React.useState(false);

  const handleContactClick = () => setShowContact((prev) => !prev);
  const handleClose = () => setShowContact(false);

  return (
    <>
      <header className="w-full px-4 sm:px-6  md:px-10 py-3 pt-6 sm:py-4 md:py-5 flex items-center justify-between bg-transparent z-40">
        <div className="flex items-center">
          <img
            src="/assets/rittz_logo.png"
            alt="Rittz Logo"
            className="w-20 sm:w-24 md:w-28 object-contain"
          />
        </div>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <button
            onClick={handleContactClick}
            className="px-3 hidden sm:block sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-white text-black border border-black rounded-md relative overflow-hidden group"
          >
            <span
              className="absolute bottom-0 left-0 w-0 h-0 bg-black rounded-full transition-all duration-300 ease-out group-hover:w-[60rem] group-hover:h-[60rem]"
              style={{ transform: "translate(-50%, 50%)" }}
            ></span>
            <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
              Talk To Us
            </span>
          </button>

          <a
            href="https://nocodenest.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 hidden sm:block sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-emerald-500 text-white border border-emerald-600 rounded-md relative overflow-hidden group"
          >
            <span
              className="absolute bottom-0 left-0 w-0 h-0 bg-emerald-600 rounded-full transition-all duration-300 ease-out group-hover:w-[60rem] group-hover:h-[60rem]"
              style={{ transform: "translate(-50%, 50%)" }}
            ></span>
            <span className="relative z-10 transition-colors duration-200 font-semibold group-hover:text-white">
              NoCodeNest
            </span>
          </a>

          <span className="text-sm hidden sm:block sm:text-base md:text-lg font-semibold text-black">
            Menu
          </span>

          <div className="w-5 sm:w-6 cursor-pointer h-5 sm:h-6">
            <img
              src="/assets/align-justify.png"
              alt="Menu Icon"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </header>

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
