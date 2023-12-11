import React from 'react';

const Landing = () => {
  return (
    <div className="mt-4 grid lg:grid-cols-2 grid-cols-1 px-8">
      <div className='flex flex-col justify-evenly gap-3'>
        <div className='flex flex-col'>

          <div className="text-center text-slate-400 text-[49.61px] font-bold font-inter leading-[65px]">All Your Team<br />Needs in One Great<br />Platform</div>

          <div className="text-center text-teal-900 text-xl font-bold font-inter leading-[30px]">Follow your team’s plans, track work progress,and discuss work all in one place. Let us<br />manage your work flawlessly and be on top of<br />everything your team is up to. </div>
        </div>

        <div className='flex justify-center'>


          <button className="p-4 bg-neutral-100 rounded-[30px] border border-teal-900 f text-teal-900 text-[17px] font-normal font-inter leading-normal">Watch Demo</button>
          <button className="p-4 bg-teal-900 rounded-[30px] border border-teal-900 flex text-white text-base font-normal font-inter leading-normal">Try for Free</button>
        </div>

      </div>

      <div>

        <img src="/assets/Group 2.png" alt="" />
      </div>
    </div>

  );
}

export default Landing;
