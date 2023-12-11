import React from "react";
import FeatureCard from "./FeatureCard";

function Services() {
  return (
    <div
      id="services"
      className="w-full flex items-center justify-center flex-col space-y-1 p-2"
    >
        <div className="text-center text-teal-900 text-[37.41px] font-bold font-inter leading-[57px]">
          Explore our services
        </div>
      
      {/* <span className="text-lg text-center text-gray-600">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
          lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam
          pellentesque nulla leo, sagittis vehicula sem commodo nec.​
        </span>
        <span></span>
      </span> */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
        <FeatureCard
          title="Odoo ERP Implementation"
          description="Trust our experts to guide you through a smooth Odoo ERP implementation process. We analyze your business requirements, customize the system accordingly, and ensure a seamless transition to Odoo, minimizing disruptions to your daily operations."
        ></FeatureCard>
        <FeatureCard
          title="Odoo ERP Customisation"
          description="Every business is unique, and we recognize that. Our team of developers creates tailored Odoo modules to address specific needs and challenges your business may face. Whether it's a custom report, integration with third-party tools, or a specialized workflow, we've got you covered."
        ></FeatureCard>
        <FeatureCard
          title="Odoo ERP Training"
          description="Empower your team with the knowledge and skills they need to maximize the benefits of Odoo ERP. Our training programs cover all aspects of the Odoo ecosystem, from basic usage to advanced customization, ensuring your team is proficient in utilizing the system to its full potential."
        ></FeatureCard>
        <FeatureCard
          title="Odoo Support"
          description="Your business doesn't operate within standard business hours, and neither do we. Our dedicated support team is available round-the-clock to address any issues, provide technical assistance, and ensure the continuous smooth operation of your Odoo ERP system."
        ></FeatureCard>
        <FeatureCard
          title="Excel Automation"
          description="Take advantage of our Excel Automation services to streamline and enhance your spreadsheet-based processes. We automate repetitive tasks, implement data validation, and create custom macros to make your Excel workflows more efficient and error-free."
        ></FeatureCard>
      </div>
    </div>
  );
}

export default Services;
