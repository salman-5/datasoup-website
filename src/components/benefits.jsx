import React from 'react';
import BenefitsCard from './benefits-card'
const Benefits = () => {
    return (
      <div className='flex flex-col pt-8'>
<div className=" text-center flex-col justify-start items-center inline-flex">
  <div className="text-center text-teal-900 text-[37.41px] font-bold font-inter leading-[57px]">How Do We Make Your Team<br/>Life Easier? </div>
</div>  
<div className="flex justify-evenly gap-2">
 <BenefitsCard svg="1.svg" text="Encourage Team Communication"/>
 <BenefitsCard svg="2.svg" text="Helps Save Time & Money "/>
 <BenefitsCard svg="3.svg" text="Makes Information Accessible "/>
 <BenefitsCard svg="4.svg" text="Keeps Everyone in The Loop "/>


</div>
      </div>
    );
}

export default Benefits;
