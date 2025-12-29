import React from "react";
import banner from "../assets/luvoir-banner1.jpeg";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative">
      <img src={banner} alt="Luvoir Banner" className="w-full md:block" />
      <div className="absolute inset-0 flex flex-col items-start md:items-start justify-center md:justify-center pb-170 pt-4 md:pb-0 px-4 md:pl-18 lg:pl-24">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-8 text-center pb-90">
          Find your Timeless Lusture
        </h1>

        <div className="flex items-center font-medium pl-110">
          <Link
            to={"/products"}
            className="group flex items-center gap-2 px-7 md:px-9 py-3 hover:#000 transition rounded text-white cursor-pointer"
          >
            Shop Now
            <svg
              className="md:hidden transition group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </Link>
          <Link
            to={"/products"}
            className="group flex items-center gap-2 px-7 md:px-9 py-3 hover:#000 transition rounded text-white cursor-pointer"
          >
            Explore Deals
            <svg
              className="md:hidden transition group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
