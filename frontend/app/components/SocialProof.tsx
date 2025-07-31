import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';

const CountUp = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1000;
      const frameRate = 30;
      const totalFrames = duration / (1000 / frameRate);
      const increment = end / totalFrames;

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / frameRate);

      return () => clearInterval(counter);
    }
  }, [inView, end]);

  return <span ref={ref}>{count}</span>;
}

export default function SocialProof() {
  const stats = [
    { value: '30', label: 'Scans completed' },
    { value: '103', label: 'Sectors Scanned' },
    { value: '600k+', label: 'Companies found' },
    { value: '17', label: 'Geographies searched' },
    { value: '90%', label: 'Repeat Customers' }
  ];

  const logos = [
    { name: 'EMI Group', src: '/assets/emi-logo.webp' },
    // { name: 'Bain Capital', src: '/assets/bain-capital-logo.svg' },
    { name: 'Ecovium', src: '/assets/ecovium-logo.svg' },
    { name: 'Solcellespesialisten', src: '/assets/solce-logo.png' },
    { name: 'United Dental', src: '/assets/uc-logo.png' },
    { name: 'KPMG', src: '/assets/kpmg-logo.svg' },
    { name: 'PwC', src: '/assets/pwc-logo.svg' },
    { name: 'TrueNorth', src: '/assets/truenorth-logo.svg' },
    { name: 'Innova', src: '/assets/innova-logo.svg' },
    { name: 'FSN', src: '/assets/fsn-logo.svg' },
  ];

  const LogoItem = ({ src, alt }: { src: string; alt:string }) => (
    <div className="relative h-10 w-32 mx-8 flex-shrink-0">
      <Image 
        src={src}
        alt={alt}
        fill
        className="object-contain"
      />
    </div>
  );

  return (
    <section className="bg-white w-full py-16">
      <div className="text-center mb-12">
        <h2 className="font-space-grotesk text-sm text-gray-600 tracking-widest uppercase">
          Trusted by Industry Leaders and Innovators
        </h2>
      </div>
      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-marquee-sm md:animate-marquee-md group-hover:[animation-play-state:paused]">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <LogoItem key={index} src={logo.src} alt={logo.name} />
          ))}
        </div>
      </div>

      <div className="mt-16 w-full flex justify-center">
        <div className="w-full lg:w-[80%] flex flex-col md:flex-row md:flex-wrap items-center justify-evenly gap-8 p-8">
          {stats.map((stat, index) => {
            const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
            const suffix = stat.value.replace(/[0-9]/g, '');
            
            return (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <span className="font-instrument-serif text-stats leading-stats text-gray-900">
                  {isNaN(numericValue) ? stat.value : <><CountUp end={numericValue} />{suffix}</>}
              </span>
              <span className="font-space-grotesk text-nav leading-button uppercase text-gray-600">
                {stat.label}
              </span>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  );
} 