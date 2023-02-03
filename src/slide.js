import React from "react";
import classNames from "classnames";

const Slide = ({ verse, n }) => {
  const classes = [
    "font-serif",
    "bg-white",
    "shadow",
    "overflow-hidden",
    "rounded-lg",
    "w-11/12",
    "my-0",
    "mx-auto",
    "p-6",
      "max-w-4xl",
    { "text-2xl": n !== 48, "text-xl": n === 48 },
    "leading-10",
    "sm:text-4xl",
    "sm:leading-normal",
    "md:text-5xl",
    "md:leading-normal",
    "text-blue-700",
    "flex-1",
    "flex",
    "justify-center",
    "items-center",
    "relative",
  ];
  return (
    <section className={classNames(classes)}>
      <div className="absolute top-0 right-0 text-gray-300 m-2">{n + 1}</div>
      {verse}
    </section>
  );
};

export default Slide;
