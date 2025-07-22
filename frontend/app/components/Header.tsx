import React, { useState } from 'react';
import Image from 'next/image';

const Header = ({ onStartSearch }: { onStartSearch: () => void }) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 bg-transparent py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/assets/pulse-main-logo.svg" 
            alt="Kelp Logo"
            width={150} 
            height={60}
          />
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onStartSearch}
            className="hidden md:inline-block font-space-grotesk text-sm text-white bg-transparent py-2 px-4 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Start Your Search
          </button>
          <button 
            onClick={onStartSearch}
            className="md:hidden font-space-grotesk text-sm text-white bg-primary-lime text-primary-green py-2 px-4 rounded-full"
          >
            Start
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 