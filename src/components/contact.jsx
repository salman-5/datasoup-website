import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className=" w-full">
        <div className="text-center text-teal-900 text-[37.26px] font-bold font-inter">
          Request a Quote
        </div>
        <div className="text-center text-gray-800 text-lg font-bold font-inter leading-loose">
          Please take a moment to fill out the form.
        </div>
        <div className="flex items-center justify-center w-full ">
          <div className="space-y-4 w-full md:w-1/2 ">
            <div className=" flex  grid-cols-2 place-content-center gap-4">
              <div className="flex w-full flex-col place-content-evenly ">
                <div className="text-gray-800 text-sm font-normal font-inter leading-[14px]">
                  Name
                </div>
                <div className=" h-10  bg-neutral-100 border border-gray-800" />
                <div className="text-gray-800 text-[13.12px] font-normal font-inter leading-[14px]">
                  Company Name
                </div>
                <div className="h-10  bg-neutral-100 border border-gray-800" />
                <div className="text-gray-800 text-sm font-normal font-inter leading-[14px]">
                  Email *
                </div>
                <div className=" h-10  bg-neutral-100 border border-gray-800" />
                <div className="text-gray-800 text-[12.91px] font-normal font-inter leading-[14px]">
                  Subject *
                </div>
                <div className=" h-10  bg-neutral-100 border border-gray-800" />
              </div>
              <div className="w-full">
                <div className="text-gray-800 text-[12.91px] font-normal font-inter leading-[14px]">
                  Leave us a message...
                </div>
                <div className=" h-[264px]  bg-neutral-100 border border-gray-800" />
              </div>
            </div>
            <div className=" text-center p-8 justify-center bg-violet-800 border border-violet-800 text-neutral-100 text-sm font-normal font-inter leading-tight">
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
