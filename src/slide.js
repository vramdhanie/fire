import React from "react";

const Slide = ({ verse, n }) => {
  return (
    <section className="font-serif bg-white shadow overflow-hidden rounded-lg w-11/12 my-0 mx-auto p-6 text-2xl leading-10 sm:text-4xl sm:leading-normal md:text-5xl md:leading-none text-blue-700 flex-1 flex justify-center items-center relative">
      <div className="absolute top-0 right-0 text-gray-300 m-2">{n + 1}</div>
      {verse}
    </section>
  );
};

export default Slide;
