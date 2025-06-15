import React from 'react'
import Image from 'next/image'

export default function WorldMap() {
  return (
    <div className="absolute -left-[20px] -top-[107px] w-[1638px] h-[1079px]">
      {/* Background Rectangle with exact Figma gradient */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(180deg, 
            rgba(25, 44, 40, 0.04) 0%, 
            rgba(25, 44, 40, 0) 49.52%, 
            rgba(25, 44, 40, 0.3) 100%)`
        }}
      />

      {/* World Map Container */}
      <div className="absolute left-[1.87px] top-0 w-[1636.02px] h-[1079px]">
        
        {/* Countries positioned exactly as in Figma */}
        
        {/* United States - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '0px',
            top: '280.07px',
            width: '464.56px',
            height: '382.99px'
          }}
        >
          <Image src="/assets/country-us.svg" alt="US" fill className="object-contain" />
        </div>

        {/* Canada - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '127.8px',
            top: '19.02px',
            width: '401.97px',
            height: '523.15px'
          }}
        >
          <Image src="/assets/country-ca.svg" alt="Canada" fill className="object-contain" />
        </div>

        {/* China - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '1104.27px',
            top: '462.06px',
            width: '278.22px',
            height: '204.56px'
          }}
        >
          <Image src="/assets/country-cn.svg" alt="China" fill className="object-contain" />
        </div>

        {/* Russia - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '858.55px',
            top: '63.06px',
            width: '776.52px',
            height: '482.37px'
          }}
        >
          <Image src="/assets/country-ru.svg" alt="Russia" fill className="object-contain" />
        </div>

        {/* Brazil - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '432.67px',
            top: '726.62px',
            width: '178.33px',
            height: '186.16px'
          }}
        >
          <Image src="/assets/country-br.svg" alt="Brazil" fill className="object-contain" />
        </div>

        {/* Australia - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '1283.09px',
            top: '796.13px',
            width: '209.53px',
            height: '251.94px'
          }}
        >
          <Image src="/assets/country-au.svg" alt="Australia" fill className="object-contain" />
        </div>

        {/* India - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '1079.52px',
            top: '578.42px',
            width: '132.75px',
            height: '141.44px'
          }}
        >
          <Image src="/assets/country-in.svg" alt="India" fill className="object-contain" />
        </div>

        {/* Germany - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '796.01px',
            top: '450.36px',
            width: '41.68px',
            height: '56.5px'
          }}
        >
          <Image src="/assets/country-de.svg" alt="Germany" fill className="object-contain" />
        </div>

        {/* United Kingdom - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '732.29px',
            top: '400.81px',
            width: '45.01px',
            height: '87.21px'
          }}
        >
          <Image src="/assets/country-gb.svg" alt="UK" fill className="object-contain" />
        </div>

        {/* France - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '747.68px',
            top: '480.35px',
            width: '65.16px',
            height: '63.95px'
          }}
        >
          <Image src="/assets/country-fr.svg" alt="France" fill className="object-contain" />
        </div>

        {/* Italy - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '799.51px',
            top: '508.21px',
            width: '53.95px',
            height: '63.52px'
          }}
        >
          <Image src="/assets/country-it.svg" alt="Italy" fill className="object-contain" />
        </div>

        {/* Japan - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '1332.1px',
            top: '518.52px',
            width: '100.8px',
            height: '118.72px'
          }}
        >
          <Image src="/assets/country-jp.svg" alt="Japan" fill className="object-contain" />
        </div>

        {/* Spain - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '686.72px',
            top: '529.66px',
            width: '102.3px',
            height: '90.55px'
          }}
        >
          <Image src="/assets/country-es.svg" alt="Spain" fill className="object-contain" />
        </div>

        {/* Mexico - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '230.63px',
            top: '593.63px',
            width: '144.26px',
            height: '90.31px'
          }}
        >
          <Image src="/assets/country-mx.svg" alt="Mexico" fill className="object-contain" />
        </div>

        {/* South Africa - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '844.2px',
            top: '853.2px',
            width: '97.55px',
            height: '138.7px'
          }}
        >
          <Image src="/assets/country-za.svg" alt="South Africa" fill className="object-contain" />
        </div>

        {/* Indonesia - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '1202.54px',
            top: '723.68px',
            width: '208.25px',
            height: '76.39px'
          }}
        >
          <Image src="/assets/country-id.svg" alt="Indonesia" fill className="object-contain" />
        </div>

        {/* Nigeria - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '781.58px',
            top: '687.08px',
            width: '54.33px',
            height: '44px'
          }}
        >
          <Image src="/assets/country-ng.svg" alt="Nigeria" fill className="object-contain" />
        </div>

        {/* Egypt - exact Figma position */}
        <div 
          className="absolute opacity-80"
          style={{
            left: '881.75px',
            top: '599.31px',
            width: '55.37px',
            height: '49.1px'
          }}
        >
          <Image src="/assets/country-eg.svg" alt="Egypt" fill className="object-contain" />
        </div>

      </div>
    </div>
  )
} 