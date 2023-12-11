import React from 'react';

const Footer = () => {
  return (
    <div className='w-full'>

      <div className=" h-[42px] pl-[7.34px] pb-2.5 left-[20px] top-[377px]  flex-col justify-start items-start inline-flex">
        <div className=" h-8 justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch justify-start items-start gap-1.5 inline-flex">
            <div className="justify-start items-start flex">
              <div className="flex-col justify-start items-start inline-flex">
                <img className="w-8 h-8 relative" src="https://img.icons8.com/color/48/facebook-new.png" />
              </div>
            </div>
            <div className="justify-start items-start flex">
              <div className="flex-col justify-start items-start inline-flex">
                <img className="w-8 h-8 relative" src="https://img.icons8.com/color/48/youtube-play.png" />
              </div>
            </div>
            <div className="justify-start items-start flex">
              <div className="flex-col justify-start items-start inline-flex">
                <img className="w-8 h-8 relative" src="https://img.icons8.com/fluency/48/instagram-new.png" />
              </div>
            </div>
            <div className="justify-start items-start flex">
              <div className="flex-col justify-start items-start inline-flex">
                <img className="w-8 h-8 relative" src="https://img.icons8.com/ios-filled/50/twitterx--v2.png" />
              </div>
            </div>
            <div className="justify-start items-start flex">
              <div className="flex-col justify-start items-start inline-flex">
                <img className="w-8 h-8 relative" src="https://img.icons8.com/color/48/whatsapp--v1.png" />
              </div>
            </div>
          </div>
        </div>
          <div className="text-center text-gray-800 text-sm font-normal font-inter">© 2024 Copyright DataSoup All Rights Reserved</div>
       
      </div>

    

    </div>

  );
}

export default Footer;
