"use client";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id?: string;
  variant?: "default" | "disabled";
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ id, label, error, variant = "default", ...props }, ref) => {
  const isDisabled = variant === "disabled";

  return (
    <div className="flex flex-col w-full">
      <label className={`text-sm font-medium ${isDisabled ? 'text-gray-500' : 'text-sky-900'}`} htmlFor={id}>
        {label}:
        <abbr className={`text-red-500 ${isDisabled ? 'text-gray-300' : ''}`}> *</abbr>
      </label>

      <input
        id={id}
        ref={ref}
        className={`w-full px-4 py-2 border mt-1 ${error ? 'border-red-500' : isDisabled ? 'border-gray-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none ${isDisabled ? 'bg-gray-100 text-gray-500 cursor-default' : 'focus:ring-2 focus:ring-blue-500 text-gray-800'}`}
        disabled={isDisabled}
        {...props}
      />
      
      {error && <abbr className="text-red-500 text-xs mt-1">{error}</abbr>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
