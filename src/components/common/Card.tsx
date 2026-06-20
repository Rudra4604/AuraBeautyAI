import React, { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  hover = true,
  className = '', 
  ...props 
}) => {
  const hoverClass = hover ? 'card-hover' : '';
  return (
    <div 
      className={`rounded-2xl bg-surface dark:bg-navy-light border border-border dark:border-white/8 ${hoverClass} ${className}`.trim()} 
      {...props}
    >
      {children}
    </div>
  );
};
