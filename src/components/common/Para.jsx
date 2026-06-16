import React from "react";

const Para = ({ paragraph, vari }) => {
  const variants = {
    pri: "leading-[133.33%] font-medium text-[24px] mt-10 text-midnight-blue",
    sec: "font-normal text-[16px] leading-[175%] mt-6 text-midnight-blue",
    ter: "font-normal text-[16px] leading-[175%] text-midnight-blue ",
    qua: "font-normal text-[16px] leading-[175%] text-white mt-2 text-midnight-blue",
    qui: "font-normal text-[10px] leading-[140%]  text-light-purpl mt-4",
    sen: "font-normal text-[12px] leading-[234%]  text-light-purpl ",
  };
  return (
    <p className={`tracking-[-1%]  ${variants[vari]}`}>
      {paragraph}{" "}
    </p>
  );
};

export default Para;
