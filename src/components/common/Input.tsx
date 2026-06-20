import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-text-secondary dark:text-gray-300 mb-2">{label}</label>}
      <input 
        className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-navy border ${error ? 'border-red-500' : 'border-border dark:border-white/10'} text-text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-gold/50 ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
