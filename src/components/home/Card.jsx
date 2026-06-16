import React from "react";
import Para from "../common/Para";
import Heading from "../common/Heading";
import { CARD_DATA } from "../../utils/helper";

const Card = () => {
  return (
    <section className="px-4  bg-white pt-24 max-lg:py-16 max-md:py-12">
      <div className="max-w-256.5 w-full mx-auto text-center ">
        <Heading heading={"How does KeySemantics work?"} vari={"sec"} />
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-24 max-lg:gap-12 max-md:gap-8 mt-14 max-md:mt-10">
          {CARD_DATA.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img className="max-w-full h-auto" src={item.image} alt="documents" />
              <Para paragraph={item.content} vari={"sec"}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
