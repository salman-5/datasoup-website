import React from 'react';
import BenefitsCard from './benefits-card'
const Benefits = () => {
    return (
      <div className='flex flex-col pt-8'>
  <p className='text-black'>How Do We Make Your Team Life Easier?</p>
  
<div className="flex gap-2">
 <BenefitsCard svg="1.svg" text="Encourage Team Communication"/>
 <BenefitsCard svg="2.svg" text="Helps Save Time & Money "/>
 <BenefitsCard svg="3.svg" text="Makes Information Accessible "/>
 <BenefitsCard svg="4.svg" text="Keeps Everyone in The Loop "/>


</div>
      </div>
    );
}

export default Benefits;
