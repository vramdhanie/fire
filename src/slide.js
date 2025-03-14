import React, { useEffect } from "react";
import classNames from "classnames";

const Slide = ({ verse, n }) => {
  // Format the verse for rendering with a decorative first letter if it's not the title
  const formattedVerse = n === 0 ? verse : <span className="decorative-first-letter">{verse}</span>;

  return (
    <section className={classNames(
      "book-page",
      "font-serif",
      "mx-auto",
      "w-11/12",
      "max-w-4xl",
      "h-[32rem]", // Fixed height for consistency
      "sm:h-[28rem]", // Slightly smaller on small screens
      "md:h-[32rem]", // Standard size on medium screens
      "lg:h-[36rem]", // Larger on big screens
      "relative",
      "flex",
      "flex-col",
      "text-ink-DEFAULT",
      {
        "text-2xl": n !== 48,
        "text-xl": n === 48,
        "sm:text-2xl": n !== 0,
        "md:text-3xl": n !== 0,
        "text-center italic font-medium": n === 0, // Title styling
        "text-center font-decorative tracking-wide": n === 0,
      }
    )}>
      {/* Page number styled with script font */}
      <div className="page-number absolute top-2 right-3 opacity-60 z-10">
        {n === 0 ? "" : n + 1}
      </div>
      
      {/* Content container with fixed dimensions and scrolling */}
      <div className="flex-1 flex flex-col justify-center overflow-y-auto hide-scrollbar">
        {/* Content with proper spacing and animation */}
        <div className="z-10 px-6 py-8 sm:px-12 leading-relaxed sm:leading-relaxed md:leading-relaxed animate-fade-in">
          {formattedVerse}
        </div>
        
        {/* Decorative elements only on non-title pages */}
        {n !== 0 && (
          <div className="decorative-divider z-10 mb-6"></div>
        )}
      </div>
    </section>
  );
};

export default Slide;
