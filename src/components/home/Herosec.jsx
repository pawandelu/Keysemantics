import React from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Butten from "../common/Butten";

const Herosec = () => {
  return (
    <section className="px-4 py-20 max-md:py-12 bg-cloud-white mt-37">
      <div className="max-w-300 mx-auto w-full flex flex-col gap-20 max-md:gap-12">
        <div className="flex xl:flex-row flex-col gap-10 justify-between items-center">
          <div className="max-w-138 w-full max-xl:text-center">
            <Heading heading={"Headless federated search"} vari={"sec"} />

            <ul className="list-disc pl-5 space-y-2 mt-2 mb-5 text-left">
              <li>
                <Para paragraph="API-First / Headless => integrate seamlessly with your applications" />
              </li>
              <li>
                <Para paragraph="Combine data from multiple sources" />
              </li>
              <li>
                <Para paragraph="Push / Crawl => Your choice: Push your data to our APIs or let our crawlers crawl your content" />
              </li>
            </ul>

            <Butten btn={"Get a demo"} vari={"pri"} />
          </div>

          <div className="w-full max-w-150">
            <img
              className="w-full h-auto object-contain"
              src="/Headless.webp"
              alt=""
            />
          </div>
        </div>

      <div className="flex xl:flex-row flex-col-reverse gap-10 justify-between items-center">
          <div className="w-full max-w-150">
            <img
              className="w-full h-auto object-contain"
              src="/dataSecurity.webp"
              alt=""
            />
          </div>

          <div className="max-w-138 w-full max-xl:text-center">
            <Heading heading={"Data Security and Hosting"} vari={"sec"} />

            <ul className="list-disc pl-5 space-y-2 mt-2 mb-5 text-left">
              <li>
                <Para paragraph="SaaS => we provide the search infrastructure so you can focus on your applications" />
              </li>
              <li>
                <Para paragraph="Hosted in a Swiss datacenter by Microsoft" />
              </li>
            </ul>

            <Butten btn={"Get a demo"} vari={"pri"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosec;
