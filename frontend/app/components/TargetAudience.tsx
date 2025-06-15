import React from 'react'

export default function TargetAudience() {
  const audiences = [
    'Private Equity',
    'Venture Capital', 
    'MnA Teams',
    'Deal Advisory',
    'Consulting'
  ]

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <h2 className="font-space-grotesk text-nav leading-nav text-text-primary">
        Who is it for?
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-4">
        {audiences.map((audience, index) => (
          <div
            key={index}
            className="flex justify-center items-center gap-2 px-4 py-2 bg-background-glass backdrop-blur-20 rounded-[40px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.12)]"
          >
            <span className="font-space-grotesk text-body leading-body text-text-primary">
              {audience}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
} 