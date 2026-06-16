import Heading from "../common/Heading";
import Para from "../common/Para";
import { ACCODION_DATA } from "../../utils/helper";
import { useState } from "react";
import Icons from "../common/Icons";
import Butten from "../common/Butten";

const Accodian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggelAccodion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-cloud-white px-4 pt-114.5 -mt-81.75 -mb-75 pb-50">
      <div className="max-w-308 mx-auto flex xl:flex-row flex-col max-xl:items-center gap-12">
        <div>
          <img
            className="max-w-150 w-full object-cover object-center h-84.25 "
            src="/desiner.webp"
            alt=""
          />
        </div>
        <div className="max-w-138">
          <Heading heading={"Key Q&A"} vari={"sec"} />
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Para
                paragraph={
                  "Let customers discover your content using AI-generated questions and answers"
                }
                vari={"ter"}
              />
            </li>
            <li>
              <Para
                paragraph={
                  "Seamlessly integrated into the Semantic Search experience"
                }
                vari={"ter"}
              />
            </li>
            <li>
              <Para paragraph={"LLM-powered Question Answering"} vari={"ter"} />
            </li>
          </ul>
          <div className="mt-4">
            {ACCODION_DATA.map((section, index) => (
              <div
                key={index}
                className={`border-b border-light-gray ${
                  index === 0 ? "border-t" : ""
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex flex-row justify-between w-full   border-light-gray py-4 cursor-pointer">
                  <h3 className="font-medium tex-[18px] w-full leading-[155%] tracking-[-1%] text-Deep-nav ">
                    {section.heading}
                  </h3>
                  <span
                    className={` transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  >
                    <Icons icon="aero" />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index
                      ? "max-h-157 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-4">
                    <Para paragraph={section.para} vari={"sec"} />

                    <div className="flex sm:flex-row flex-col items-center gap-4">
                      <img
                        className="max-w-67 h-37.5"
                        src={section.image1}
                        alt=""
                      />
                      <img
                        className="max-w-67 h-37.5"
                        src={section.image2}
                        alt=""
                      />
                    </div>

                    <Para paragraph={section.desc} vari={"sec"} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Butten btn={"Get a demo"} vari={"pri"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accodian;
