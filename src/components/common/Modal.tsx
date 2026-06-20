import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className = '' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className={`bg-surface dark:bg-navy border border-border dark:border-white/10 rounded-2xl w-full max-w-md shadow-2xl relative ${className}`}>
        {title && (
          <div className="p-6 border-b border-border dark:border-white/10 flex justify-between items-center">
            <h3 className="text-xl font-bold text-text-primary dark:text-white">{title}</h3>
            <button onClick={onClose} className="text-text-secondary hover:text-text-primary dark:hover:text-white transition-colors cursor-pointer">
              ✕
            </button>
          </div>
        )}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
