import React from 'react';
import crestLogo from '../assets/crest_jesus_college.svg';

export default function Crest({ size = 48, className = '', style = {} }) {
  return (
    <img
      src={crestLogo}
      alt="Jesus College Oxford Crest"
      width={size}
      height={size}
      className={className}
      style={{
        width: `${size}px`,
        height: 'auto',
        maxHeight: `${Math.round(size * 1.25)}px`,
        objectFit: 'contain',
        display: 'inline-block',
        verticalAlign: 'middle',
        ...style
      }}
    />
  );
}
