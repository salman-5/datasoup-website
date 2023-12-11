// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [navbarBg, setNavbarBg] = useState("transparent");
  // const [navbarBg, setNavbarBg] = useState("bg-teal-500");

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  //   const handleScroll = () => {
  //     const scrollPosition = window.pageYOffset;
  //     console.log(scrollPosition);
  //     if (scrollPosition > 0) {
  //       setNavbarBg("transparent"); // Change the color to white or any other color
  //     } else {
  //       setNavbarBg("bg-teal-500");
  //     }
  //   };

  return (
    <motion.nav
    //removed fixed
      class={`fixed bg-[#cb82b7] z-50  top-0 left-0 flex items-center justify-around flex-wrap  p-4 w-full transform transition duration-300 bg-transparent ${navbarBg}`}
    >
      <div class="flex items-center  text-white mr-6 bg-blue-700">
        <img
          className="h-18 w-24"
          src="/assets/datasoup.svg"
          alt=""
        />
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          x: 100,
          animationDuration: 300,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="hidden lg:block bg-[rgba(230,202,222,1)] rounded-full space-x-5 flex p-3 px-12  "
      >
        <div class="w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto space-x-5">
          <div class=" lg:flex-grow space-x-5 text-xl">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-[rgb(71,32,183)] duration-300 mr-4"
            >
              Home
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-[rgb(71,32,183)] duration-300 mr-4"
            >
              Services
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-[rgb(71,32,183)] duration-300"
            >
              Resources
            </a>
          </div>
          <div>
            <a
              href="#"
              class="inline-block text-xl px-7 rounded-full py-2 border border-transparent  hover:border hover:border-[rgb(71,32,183)] text-white bg-[rgb(71,32,183)]  hover:text-[rgb(71,32,183)] transition duration-300 hover:bg-white mt-4 lg:mt-0"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
