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
          <a
            href="https://kelp.kelpglobal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-space-grotesk text-sm text-white hover:text-primary-lime transition-colors font-bold"
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 