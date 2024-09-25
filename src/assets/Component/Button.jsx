import React from 'react';

const Button = ({ icon, head }) => {
  return (
    <div className="flex items-center gap-2 p-2 md:flex-col md:items-center md:justify-center cursor-pointer hover:text-red-600">
      
      <div className="md:text-[28px] ipadpro:text-[28px] lg:text-[24px] md:flex ipadpro:flex md:justify-center ipadpro:justify-center md:w-full ipadpro:w-full ">
        {icon}
      </div>

      
      <div className="hidden ipadpro:hidden lg:block">
        {head}
      </div>
    </div>
  );
};

export default Button;
