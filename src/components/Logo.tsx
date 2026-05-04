import React from 'react';

export function YakovkaLogo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Background Circle (Brown) */}
      <circle cx="100" cy="100" r="96" fill="#4E342E" stroke="#5D4037" strokeWidth="4" />
      <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />

      {/* Decorative Leaves (Green) */}
      <g stroke="#81C784" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" fill="none">
        {/* Left branch */}
        <path d="M 25 125 Q 10 95 25 55" />
        <path d="M 25 55 Q 35 45 45 55 Q 35 65 25 55" fill="#81C784" fillOpacity="0.3"/>
        <path d="M 18 85 Q 30 75 35 85 Q 25 95 18 85" fill="#81C784" fillOpacity="0.3"/>
        <path d="M 15 105 Q 25 95 28 105 Q 20 115 15 105" fill="#81C784" fillOpacity="0.3"/>
        
        {/* Right branch */}
        <path d="M 175 125 Q 190 95 175 55" />
        <path d="M 175 55 Q 165 45 155 55 Q 165 65 175 55" fill="#81C784" fillOpacity="0.3"/>
        <path d="M 182 85 Q 170 75 165 85 Q 175 95 182 85" fill="#81C784" fillOpacity="0.3"/>
        <path d="M 185 105 Q 175 95 172 105 Q 180 115 185 105" fill="#81C784" fillOpacity="0.3"/>
      </g>

      {/* Main House and Heart Icon (White) */}
      <path 
        d="M 40 105 
           L 95 105 
           C 80 105, 60 60, 80 60 
           C 90 60, 95 80, 100 85 
           C 105 80, 110 60, 120 60 
           C 140 60, 120 105, 105 105 
           L 160 105 
           L 160 70 
           L 175 70 
           L 135 45 
           L 100 65 
           L 65 45 
           L 25 70 
           L 40 70 
           Z" 
        stroke="white" 
        strokeWidth="7" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
      />

      {/* Text (White) */}
      <text 
        x="100" 
        y="150" 
        fontFamily="var(--font-montserrat), system-ui, sans-serif" 
        fontSize="28" 
        fill="white" 
        fontWeight="600" 
        textAnchor="middle" 
        letterSpacing="0.05em"
      >
        Yakovka
      </text>
      <text 
        x="100" 
        y="178" 
        fontFamily="Caveat, 'Brush Script MT', cursive" 
        fontSize="24" 
        fill="#D7CCC8" 
        fontStyle="italic" 
        textAnchor="middle"
      >
        shale
      </text>
    </svg>
  );
}
