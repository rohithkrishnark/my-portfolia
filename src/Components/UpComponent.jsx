import React from 'react';

const UpComponent = () => {
  return (
    <a href="#home" className="group">
      <div className=" w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] bg-gray-900 rounded-full fixed right-4 bottom-4 flex items-center justify-center text-white text-lg cursor-pointer shadow-lg border border-gray-200 animate-bounce group-hover:animate-none transition">
        ↑
      </div>
    </a>
  );
};

export default UpComponent;
