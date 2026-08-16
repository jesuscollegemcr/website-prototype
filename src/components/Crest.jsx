import React from 'react';

export default function Crest({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#084E2E" />
          <stop offset="50%" stopColor="#005A36" />
          <stop offset="100%" stopColor="#033820" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D77F" />
          <stop offset="50%" stopColor="#C59B27" />
          <stop offset="100%" stopColor="#8E6A0F" />
        </linearGradient>
      </defs>

      <path
        d="M50 6 C78 6 92 18 92 42 C92 78 50 114 50 114 C50 114 8 78 8 42 C8 18 22 6 50 6 Z"
        fill="url(#shieldGrad)"
        stroke="url(#goldGrad)"
        strokeWidth="4.5"
      />

      <g fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="0.8">
        <path d="M30 25 C28 20 25 17 22 18 C20 20 22 23 25 24 C21 25 19 28 21 31 C23 31 26 28 29 27 M30 25 C32 23 34 22 36 24 C38 26 36 29 34 30 C37 31 38 34 36 36 C34 36 32 33 30 32" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <circle cx="32" cy="30" r="4.5" />
        <path d="M32 34 C25 34 22 39 22 45 C22 50 27 52 32 52 C37 52 42 50 42 45 C42 39 39 34 32 34 Z" />
        <path d="M26 53 L24 62 M38 53 L40 62" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      <g fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="0.8">
        <path d="M68 25 C66 20 63 17 60 18 C58 20 60 23 63 24 C59 25 57 28 59 31 C61 31 64 28 67 27 M68 25 C70 23 72 22 74 24 C76 26 74 29 72 30 C75 31 76 34 74 36 C72 36 70 33 68 32" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <circle cx="70" cy="30" r="4.5" />
        <path d="M70 34 C63 34 60 39 60 45 C60 50 65 52 70 52 C75 52 80 50 80 45 C80 39 77 34 70 34 Z" />
        <path d="M64 53 L62 62 M76 53 L78 62" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      <g fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="0.8">
        <path d="M48 58 C46 53 43 50 40 51 C38 53 40 56 43 57 C39 58 37 61 39 64 C41 64 44 61 47 60 M48 58 C50 56 52 55 54 57 C56 59 54 62 52 63 C55 64 56 67 54 69 C52 69 50 66 48 65" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <circle cx="50" cy="63" r="4.5" />
        <path d="M50 67 C43 67 40 72 40 78 C40 83 45 85 50 85 C55 85 60 83 60 78 C60 72 57 67 50 67 Z" />
        <path d="M44 86 L42 95 M56 86 L58 95" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
