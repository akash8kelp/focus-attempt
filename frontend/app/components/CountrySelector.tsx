'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { continents, Country } from '../data/countries';

interface CountrySelectorProps {
  selectedCountries: Country[];
  onChange: (selected: Country[]) => void;
  hasError: boolean;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ selectedCountries, onChange, hasError }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const toggleCountry = (country: Country) => {
    const isSelected = selectedCountries.some(c => c.name === country.name);
    if (isSelected) {
      onChange(selectedCountries.filter(c => c.name !== country.name));
    } else {
      onChange([...selectedCountries, country]);
    }
  };

  const handleRemoveCountry = (country: Country) => {
    onChange(selectedCountries.filter(c => c.name !== country.name));
  };

  const filteredContinents = continents
    .map(continent => ({
      ...continent,
      countries: continent.countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(continent => continent.countries.length > 0);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center flex-wrap gap-2 p-2 rounded border cursor-pointer min-h-[48px] ${
          hasError ? 'border-red-500' : 'border-[#E6E6E6]'
        } ${isOpen ? 'border-[#192C28]' : ''}`}
      >
        {selectedCountries.length === 0 && (
          <span className="text-sm font-space-grotesk text-[#666666] ml-2">Select countries</span>
        )}
        {selectedCountries.map(country => (
          <div key={country.name} className="flex items-center gap-2 bg-[#F0F0F0] rounded-full px-3 py-1">
            <span className="text-sm font-space-grotesk text-[#141414]">{country.name}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveCountry(country);
              }}
              className="text-gray-500 hover:text-gray-800 ml-1 text-xs"
            >
              &#x2715;
            </button>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-[#E6E6E6] rounded-lg shadow-lg">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-[#E6E6E6] rounded text-sm focus:outline-none focus:border-[#192C28] text-gray-900"
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredContinents.map(continent => (
              <div key={continent.name}>
                <h3 className="px-3 py-2 text-xs font-bold text-gray-500 uppercase bg-gray-50">
                  {continent.name}
                </h3>
                <ul>
                  {continent.countries.map(country => (
                    <li
                      key={country.name}
                      onClick={() => toggleCountry(country)}
                      className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      <input
                        type="checkbox"
                        readOnly
                        checked={selectedCountries.some(c => c.name === country.name)}
                        className="h-4 w-4 rounded border-gray-300 text-[#192C28] focus:ring-[#192C28]"
                      />
                      <span className="text-sm font-space-grotesk text-[#141414]">{country.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySelector; 