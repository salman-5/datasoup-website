import React from "react";
import WhyCard from "./why-us-card";
const Whyus = () => {
  return (
    <div className="flex flex-col pt-8">
      <div className=" text-center flex-col justify-start items-center inline-flex">
        <div className="text-center text-teal-900 text-[37.41px] font-bold font-inter leading-[57px]">
          Why Choose Us?
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <WhyCard
          svg="1.svg"
          text="Expertise"
          description="Benefit from the experience of our seasoned professionals in both Odoo ERP and Excel Automation."
        />
        <WhyCard
          svg="2.svg"
          text="Customer-Centric Approach"
          description="Our solutions are tailored to fit seamlessly into your business operations, ensuring maximum efficiency."
        />
        <WhyCard
          svg="3.svg"
          text="Continuous Improvement"
          description="Stay ahead with our commitment to keeping abreast of the latest updates and innovations in both Odoo and Excel technologies."
        />
        <WhyCard
          svg="4.svg"
          text="Reliability"
          description="Count on us for reliable support, timely responses, and comprehensive solutions to meet your business needs."
        />
      </div>
    </div>
  );
};

export default Whyus;
