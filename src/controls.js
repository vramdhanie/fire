import React from "react";
import { BsArrowCounterclockwise } from "react-icons/bs";

const Controls = ({ nextSlide, n }) => {
  return (
    <div className="text-center p-2">
      <nav className="relative z-10 inline-flex my-0 mx-auto">
        <div
          href=""
          className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-illumination-gold/30 bg-parchment-dark/20 text-sm leading-5 font-medium text-parchment-light hover:bg-illumination-gold/10 focus:z-10 focus:outline-none focus:border-illumination-gold active:bg-illumination-gold/20 active:text-parchment-light transition ease-in-out duration-150 cursor-pointer"
          aria-label="Previous"
          onClick={(e) => {
            nextSlide("left");
            e.stopPropagation();
          }}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span className="relative inline-flex items-center px-4 py-2 border border-l-0 border-r-0 border-illumination-gold/30 bg-parchment-dark/20 text-sm leading-5 font-script text-xl text-parchment-light">
          {parseInt(n) + 1}
        </span>
        <div
          className="relative inline-flex items-center px-3 py-2 border border-illumination-gold/30 bg-parchment-dark/20 text-sm leading-5 font-medium text-parchment-light hover:bg-illumination-gold/10 focus:z-10 focus:outline-none focus:border-illumination-gold active:bg-illumination-gold/20 active:text-parchment-light transition ease-in-out duration-150 cursor-pointer"
          aria-label="Next"
          onClick={(e) => {
            nextSlide("right");
            e.stopPropagation();
          }}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          className="relative ml-3 inline-flex items-center px-3 py-2 rounded-md border border-illumination-gold/30 bg-parchment-dark/20 text-sm leading-5 font-medium text-parchment-light hover:bg-illumination-gold/10 focus:z-10 focus:outline-none focus:border-illumination-gold active:bg-illumination-gold/20 active:text-parchment-light transition ease-in-out duration-150 cursor-pointer"
          aria-label="Reset"
          onClick={(e) => {
            nextSlide("r");
            e.stopPropagation();
          }}
        >
          <BsArrowCounterclockwise className="h-5 w-5" />
        </div>
      </nav>
    </div>
  );
};

export default Controls;
