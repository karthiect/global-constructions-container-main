import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline';
  className?: string;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-navy-gradient text-white hover:opacity-90 rounded-xl',
    secondary: 'bg-white text-navy hover:bg-white/90 rounded-xl',
    gold: 'bg-gold-gradient text-white hover:shadow-[0_0_20px_rgba(239,126,57,0.4)] hover:scale-105 rounded-xl',
    outline: 'px-6 py-3 border border-white text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-navy transition-all duration-300 rounded-xl'
  };

  return (
    <button 
      className={cn(
        "transition-all duration-300 font-bold uppercase tracking-widest text-xs",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
