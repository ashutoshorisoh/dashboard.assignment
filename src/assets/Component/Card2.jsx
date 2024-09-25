import React from 'react';

const Card2 = ({ lgContent, xlContent, smContent, imageSrc }) => {
  return (
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      
      <div className="flex flex-col justify-between p-4 w-2/3">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-700">{lgContent}</h3>
        </div>
        <div className="mb-2">
          <h3 className="text-xl font-bold text-blue-600">{xlContent}</h3>
        </div>
        <div>
          <h3 className="text-sm text-gray-500">{smContent}</h3>
        </div>
      </div>

     
      <div className="w-1/3">
        <img 
          src={imageSrc} 
          alt="Card Image" 
          className="w-full h-full object-cover rounded-r-lg"
        />
      </div>
    </div>
  );
};

export default Card2;
