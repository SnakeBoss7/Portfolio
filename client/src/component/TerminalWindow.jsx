import React from 'react';

const TerminalWindow = ({ title = "user@system:~", children, className = "" }) => {
  return (
    <div className={`w-full rounded-lg overflow-hidden border border-[#333] bg-[#0a0a0a] shadow-lg shadow-primary/5 ${className}`}>
      {/* Window Header */}
      <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-[#333]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400 font-mono">{title}</div>
        <div className="w-12"></div> {/* Spacer for centering */}
      </div>
      
      {/* Window Content */}
      <div className="p-6 font-mono text-gray-300">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
