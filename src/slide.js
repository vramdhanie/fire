import React from "react";

const Slide = ({ verse }) => {
  return (
    <section className="bg-white shadow overflow-hidden rounded-lg w-11/12 my-0 mx-auto p-6 text-2xl leading-10 sm:text-4xl sm:leading-normal md:text-5xl md:leading-none text-blue-700 flex-1 flex justify-center items-center">
      {verse}
    </section>
  );
};

export default Slide;
