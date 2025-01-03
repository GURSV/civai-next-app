import React from 'react';

interface DividerProps {
  width?: 'full' | 'medium' | 'small';
  className?: string;
}

export default function Divider({ width = 'medium', className = '' }: DividerProps) {
  const widthClasses = {
    full: 'w-full',
    medium: 'w-1/2',
    small: 'w-1/4'
  };

  return (
    <div className="flex justify-center my-8">
      <div className={`
        h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent
        ${widthClasses[width]}
        ${className}
      `} />
    </div>
  );
}