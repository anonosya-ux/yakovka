import React from 'react';

export function YakovkaLogo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Background */}
      <circle cx="60" cy="60" r="58" fill="#1C2E24" />
      <circle cx="60" cy="60" r="54" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
      
      {/* Leaves / Sprigs Left */}
      <path d="M 15 60 Q 25 45 40 35" stroke="#6B8E71" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M 22 52 Q 22 40 32 32" stroke="#6B8E71" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M 18 68 Q 30 55 42 50" stroke="#6B8E71" strokeWidth="2" fill="none" strokeLinecap="round"/>
      
      {/* Leaves / Sprigs Right */}
      <path d="M 105 60 Q 95 45 80 35" stroke="#6B8E71" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M 98 52 Q 98 40 88 32" stroke="#6B8E71" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M 102 68 Q 90 55 78 50" stroke="#6B8E71" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* House outline */}
      <path 
        d="M 25 60 L 25 45 L 60 20 L 95 45 L 95 60" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
      />
      <path 
        d="M 40 34 L 15 52" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
      />
      <path 
        d="M 80 34 L 105 52" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
      />
      
      {/* Inner Heart merged with house base */}
      <path 
        d="M 40 55 C 35 48 30 52 35 62 L 60 80 L 85 62 C 90 52 85 48 80 55" 
        stroke="white" 
        strokeWidth="4.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
      />
      <path 
        d="M 25 60 C 25 65 30 70 42 70" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
        fill="none"
      />
      <path 
        d="M 95 60 C 95 65 90 70 78 70" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
        fill="none"
      />

      {/* Text */}
      <text 
        x="60" 
        y="100" 
        fontFamily="system-ui, sans-serif" 
        fontSize="16" 
        fill="white" 
        fontWeight="500" 
        textAnchor="middle" 
        letterSpacing="1.5"
      >
        Yakovka
      </text>
      <text 
        x="60" 
        y="112" 
        fontFamily="Georgia, serif" 
        fontSize="10" 
        fill="#8FB896" 
        fontStyle="italic" 
        textAnchor="middle"
      >
        shale
      </text>
    </svg>
  );
}
