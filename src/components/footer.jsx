import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className=" h-[42px] p-4 justify-between items-center flex flex-row-reverse">
        <div className=" h-8 justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch justify-start items-start gap-1.5 inline-flex">
            <div className="justify-start items-start flex">
              <div className="flex-col justify-start items-start inline-flex">
                <img
                  className="w-8 h-8 relative"
                  src="https://via.placeholder.com/32x32"
                />
              </div>
            </div>
            <div className="justify-start items-start flex">
              <div className="flex-col justify-start items-start inline-flex">
                <img
                  className="w-8 h-8 relative"
                  src="https://via.placeholder.com/32x32"
                />
              </div>
            </div>
            <div className="justify-start items-start flex">
              <div className="flex-col justify-start items-start inline-flex">
                <img
                  className="w-8 h-8 relative"
                  src="https://via.placeholder.com/32x32"
                />
              </div>
            </div>
            <div className="justify-start items-start flex">
              <div className="flex-col justify-start items-start inline-flex">
                <img
                  className="w-8 h-8 relative"
                  src="https://icons8.com/icon/48841/instagram"
                />
              </div>
            </div>
            <div className="justify-start items-start flex">
              <div className="flex-col justify-start items-start inline-flex">
                <img
                  className="w-8 h-8 relative"
                  src="https://icons8.com/icon/fJp7hepMryiw/twitterx"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-800 text-sm font-normal font-inter">
          © 2024 Copyright DataSoup All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
