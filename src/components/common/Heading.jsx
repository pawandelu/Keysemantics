import React from "react";

const Heading = ({ heading, vari }) => {
  const variants = {
    pri: "lg:text-[64px] sm:text-[50px] text-[40px] max-w-[672px] text-center mt-[200px] leading-[112%] text-midnight-blue  ",
    sec: " md:text-[32px] text-[28px] md:leading-[225%] leading-[150%]  text-midnight-blue  ",
    ter: "text-[32px] leading-[225%] text-white ",
  };
  return (
    <h2
      className={`font-bold text-midnight-blue  tracking-[-1%]   ${variants[vari]}`}
    >
      {heading}
    </h2>
  );
};

export default Heading;
