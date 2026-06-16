import React from "react";

const Butten = ({ btn, vari }) => {
  const varient = {
    pri: "font-normal lg:text-[13.85px] sm:text-[12px] text-[10px]  lg:px-[16px] lg:py-[12px] sm:px-[14px] sm:py-[10px] px-[11px] py-[9px]  inline-block leading-[132.86%] bg-white  hover:bg-midnight-blue hover:text-white text-midnight-blue border border-midnight-blue",
    sec: "font-medium text-[16px]  px-[32px] py-[20px] mt-[48px] leading-[115%] bg-midnight-blue text-white hover:bg-white hover:text-midnight-blue border border-transparent hover:border-midnight-blue ",
    ter: "font-medium lg:text-[14px]  text-[12px] lg:px-[33px]  lg:py-[18px] sm:px-6 sm:py-4 px-5 py-3 mt-[24px] leading-[100%]  text-white bg-sky-cyan hover:bg-white hover:text-sky-cyan mb-24 w-fit",
  };
  return (
    <h2
      className={`rounded-[48px] tracking-[-1%] cursor-pointer transition-all duration-300 ${varient[vari]}`}
    >
      {btn}
    </h2>
  );
};

export default Butten;
