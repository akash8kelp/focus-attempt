import React from 'react'
import Image from 'next/image'

export default function SocialProof() {
  const stats = [
    { value: '57', label: 'Scans completed' },
    { value: '357', label: 'Sectors Scanned' },
    { value: '18k+', label: 'Companies found' },
    { value: '17', label: 'Geographies searched' },
    { value: '88%', label: 'Repeat Customers' }
  ];

  const logos = [
    { type: 'single', src: '/assets/logo-1.svg', width: 67 },
    { 
      type: 'multi', 
      width: 94,
      parts: [
        { src: "/assets/logo-2-part1.svg", style: { left: '24.7px', top: '13.67px', width: '15.43px', height: '15.41px' } },
        { src: "/assets/logo-2-part2.svg", style: { left: '41.34px', top: '13.67px', width: '15.43px', height: '15.41px' } },
        { src: "/assets/logo-2-part3.svg", style: { left: '57.98px', top: '13.67px', width: '14.74px', height: '22.31px' } },
        { src: "/assets/logo-2-part4.svg", style: { left: '74.72px', top: '6.03px', width: '3.29px', height: '22.58px' } },
        { src: "/assets/logo-2-part5.svg", style: { left: '79.43px', top: '13.67px', width: '14.19px', height: '15.41px' } },
        { src: "/assets/logo-2-part6.svg", style: { left: '0.11px', top: '5.15px', width: '23.27px', height: '23.93px' } },
      ]
    },
    { type: 'single', src: '/assets/logo-3.svg', width: 123 },
    { 
      type: 'multi',
      width: 123,
      parts: [
        { src: "/assets/logo-4-part1.svg", style: { left: '0px', top: '3.33px', width: '31.58px', height: '31.67px' } },
        { src: "/assets/logo-4-part2.svg", style: { left: '48.04px', top: '9.64px', width: '74.58px', height: '19.3px' } },
      ]
    },
    { type: 'single', src: '/assets/logo-5.svg', width: 113 },
    { type: 'single', src: '/assets/logo-6.svg', width: 60 },
    { type: 'single', src: '/assets/logo-7.svg', width: 121 },
    {
      type: 'multi',
      width: 148,
      parts: [
        { src: "/assets/logo-8-part1.svg", style: { left: '0px', top: '18.16px', width: '7.82px', height: '9.95px' } },
        { src: "/assets/logo-8-part2.svg", style: { left: '6.72px', top: '10px', width: '11.35px', height: '18.11px' } },
      ]
    }
  ];

  const LogoItem = ({ logo }: { logo: any }) => (
    <div className={`relative h-10 mx-8 flex-shrink-0`} style={{ width: `${logo.width}px`}}>
      {logo.type === 'single' ? (
        <Image src={logo.src} alt="Company Logo" fill className="object-contain opacity-70" />
      ) : (
        <div className="relative w-full h-full">
          {logo.parts.map((part: any, index: number) => (
            <div key={index} className="absolute" style={part.style}>
              <Image src={part.src} alt="" fill className="object-contain" />
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className="bg-white px-4 md:px-10 lg:px-20 xl:px-120 py-20 flex flex-col gap-120">
      {/* Company Logos Section */}
      <div className="flex flex-col items-center gap-10 w-full">
        <h2 className="font-space-grotesk text-center text-nav leading-nav text-gray-900 px-4">
          Trusted by 500+ forward-thinking companies
        </h2>
        
        <div className="relative w-full overflow-hidden group">
          <div className="flex items-center animate-marquee">
             {logos.map((logo, index) => (
                <LogoItem key={index} logo={logo} />
              ))}
              {logos.map((logo, index) => (
                <LogoItem key={`dup-${index}`} logo={logo} />
              ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center lg:justify-between gap-8 bg-background-stats rounded-lg p-8 lg:px-24 xl:px-32">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-2">
            <span className="font-instrument-serif text-stats leading-stats text-gray-900">
              {stat.value}
            </span>
            <span className="font-space-grotesk text-nav leading-button uppercase text-gray-600">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
} 