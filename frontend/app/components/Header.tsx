import React, { useState } from 'react';
import Image from 'next/image';

const Header = ({ onStartSearch }: { onStartSearch: () => void }) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 bg-transparent py-4 px-8">
      <div className="w-full mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/assets/pulse-main-logo.svg" 
            alt="Kelp Logo"
            width={150} 
            height={60}
          />
        </div>
        <a
          href="https://kelp.kelpglobal.in"
          target="_blank"
          rel="noopener noreferrer"
          className="font-space-grotesk text-lg text-white hover:text-primary-lime transition-colors font-bold"
        >
          Sign In
        </a>
      </div>
    </header>
  );
};

export default Header; 