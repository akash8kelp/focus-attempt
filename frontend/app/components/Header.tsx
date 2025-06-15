import React from 'react';

export default function Header() {
  return (
    <header className="relative z-20 flex justify-between items-center px-4 sm:px-8 md:px-12 py-4">
      {/* Logo */}
      <div className="font-space-grotesk text-2xl font-bold leading-nav text-white uppercase">
        PULSE
      </div>

      {/* Navigation */}
      <nav className="flex justify-end items-center gap-6 sm:gap-8">
        <a 
          href="https://kelp.kelpglobal.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-space-grotesk text-base text-white hover:text-[#c4e538] transition-colors"
        >
          Sign In
        </a>
      </nav>
    </header>
  );
} 