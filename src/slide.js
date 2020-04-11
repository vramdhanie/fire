import React from "react";

const Slide = ({ verse }) => {
  return (
    <section className="font-semibold text-xl md:text-5xl text-center p-12 text-blue-900 transition-all">
      {verse}
    </section>
  );
};

export default Slide;
