import React from 'react';

const Card = ({ head, number, below }) => {
  return (
    <div className='h-[132px] bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between items-center transition-transform transform hover:scale-105'>
      <div>
        <h3 className='text-base font-semibold text-gray-700  '>{head}</h3>
        <h2 className='text-2xl font-bold text-blue-600 '>{number}</h2>
        <h4 className='text-sm text-gray-500 '>{below}</h4>
      </div>
    </div>
  );
};

export default Card;
