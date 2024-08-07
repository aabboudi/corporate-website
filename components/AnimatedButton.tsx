"use client"
import React from 'react';

interface AnimatedButtonProps {
  variant?: 'light' | 'dark';
  children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ variant = 'light', children }) => {
  const isLight = variant === 'light';
  const baseClasses = 'relative overflow-hidden border-2 transition-colors duration-500 px-3 py-2 rounded-xl';
  const lightClasses = 'text-primary border-primary';
  const darkClasses = 'bg-primary text-white border-primary';

  return (
    <button
      className={`${baseClasses} ${isLight ? lightClasses : darkClasses}`}
    >
      <span className="relative z-10">{children}</span>
      <div
        className={`absolute w-[300px] h-[200px] rounded-full transition-all duration-500 top-full left-full ${
          isLight ? 'bg-white' : 'bg-primary'
        }`}
      ></div>
      <style jsx>{`
        button:hover div,
        button:focus div {
          top: -45px;
          left: -45px;
        }

        button:hover,
        button:focus {
          color: ${isLight ? '#000' : '#fff'} !important;
        }
      `}</style>
    </button>
  );
};

export default AnimatedButton;
