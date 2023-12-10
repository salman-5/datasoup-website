import React from 'react';

const Landing = () => {
    return (
        <div className="w-[720px] h-[809px] relative">
        <div className="h-[409px] pl-[115px] pt-[193px] pb-[21px] left-[8px] top-0 absolute flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-[195px] pl-[2.60px] pr-[2.40px] flex-col justify-start items-center flex">
            <div className="text-center text-slate-400 text-[49.61px] font-bold font-inter leading-[65px]">All Your Team<br/>Needs in One Great<br/>Platform</div>
          </div>
        </div>
        <div className="h-[156px] pl-[115px] pb-9 left-[27px] top-[409px] absolute flex-col justify-start items-start inline-flex">
          <div className="self-stretch h-[120px] pl-[1.60px] pr-[1.40px] flex-col justify-start items-center flex">
            <div className="text-center text-teal-900 text-xl font-bold font-inter leading-[30px]">Follow your team’s plans, track work progress,<br/>and discuss work all in one place. Let us<br/>manage your work flawlessly and be on top of<br/>everything your team is up to. </div>
          </div>
        </div>
        <div className="w-[295px] h-[60px] pl-[115px] pb-2.5 left-[55px] top-[565px] absolute flex-col justify-start items-start inline-flex">
          <div className="w-[180px] h-[50px] justify-center items-center inline-flex">
            <div className="w-[180px] h-[50px] relative bg-neutral-100 rounded-[30px] border border-teal-900 flex-col justify-start items-start flex">
            
              <div className="flex-col justify-center items-center inline-flex">
                <div className="text-teal-900 text-[17px] font-normal font-inter leading-normal">Watch Demo</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[295px] h-[60px] pl-[115px] pb-2.5 left-[255px] top-[565px] absolute flex-col justify-start items-start inline-flex">
          <div className="w-[180px] h-[50px] justify-center items-center inline-flex">
            <div className="w-[180px] h-[50px] relative bg-teal-900 rounded-[30px] border border-teal-900 flex-col justify-start items-start flex">
          
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-white text-base font-normal font-inter leading-normal">Try for Free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Landing;
