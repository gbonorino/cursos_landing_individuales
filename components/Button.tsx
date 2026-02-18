import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/20 border border-transparent hover:-translate-y-0.5",
    secondary: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-800 shadow-md",
    outline: "bg-transparent border border-rose-500 text-rose-500 hover:bg-rose-50",
    ghost: "bg-transparent hover:bg-stone-200 text-slate-600 hover:text-slate-900"
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};