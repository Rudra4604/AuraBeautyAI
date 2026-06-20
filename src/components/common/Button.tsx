import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'default';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  let variantClass = '';
  if (variant === 'gold') variantClass = 'btn-gold py-3';
  if (variant === 'outline') variantClass = 'btn-outline-gold py-2.5 px-6';
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button 
      className={`${variantClass} ${widthClass} ${className} cursor-pointer`.trim()} 
      {...props}
    >
      {children}
    </button>
  );
};
