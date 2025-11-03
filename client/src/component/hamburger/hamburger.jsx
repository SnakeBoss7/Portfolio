import React from 'react';

const Switch = ({ isChecked, setShowNav }) => {
  const handleClick = () => {
    setShowNav(prev => !prev);
  };

  return (
    <div 
      className="w-[28px] h-[28px] flex items-center justify-center overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-[28px] h-[28px] flex items-center justify-center">
        <span className={`w-[28px] h-[28px] flex flex-col items-center justify-center relative transition-all duration-200 ${isChecked ? 'rotate-45 scale-110' : ''}`}>
          <span className="w-full h-1/2 flex items-start justify-between">
            <span className="w-1.5 h-1.5 border-2 border-white rounded-full transition-all duration-200" />
            <span className="w-1.5 h-1.5 border-2 border-white rounded-full transition-all duration-200" />
          </span>
          <span className="w-full h-1/2 flex items-end justify-between">
            <span className="w-1.5 h-1.5 border-2 border-white rounded-full transition-all duration-200" />
            <span className="w-1.5 h-1.5 border-2 border-white rounded-full transition-all duration-200" />
          </span>
          <span className={`absolute flex flex-col items-center justify-between transition-all duration-200 ${isChecked ? 'h-[80px]' : 'h-full'}`}>
            <span className="w-1.5 h-1.5 border-2 border-white rounded-full transition-all duration-200" />
            <span className={`w-1.5 border-2 border-white rounded-full transition-all duration-200 ${isChecked ? 'h-[28px] rounded-md' : 'h-1.5'}`} />
            <span className="w-1.5 h-1.5 border-2 border-white rounded-full transition-all duration-200" />
          </span>
          <span className={`absolute flex items-center justify-between transition-all duration-200 ${isChecked ? 'w-[80px]' : 'w-full'}`}>
            <span className="w-1.5 h-1.5 border-2 border-white rounded-full transition-all duration-200" />
            <span className={`h-1.5 border-2 border-white rounded-full transition-all duration-200 ${isChecked ? 'w-[28px] rounded-md' : 'w-1.5'}`} />
            <span className="w-1.5 h-1.5 border-2 border-white rounded-full transition-all duration-200" />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Switch;