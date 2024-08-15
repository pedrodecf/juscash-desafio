"use client";
import { InputHTMLAttributes, forwardRef } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id?: string;
  variant?: "default" | "disabled";
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ id, label, error, variant = "default", ...props }, ref) => {
  const isDisabled = variant === "disabled";

  return (
    <div className="flex flex-col w-full">
      <label className={`flex items-center text-sm font-medium ${isDisabled ? 'text-gray-500' : 'text-sky-900'}`} htmlFor={id}>
        <input
          id={id}
          ref={ref}
          type="checkbox"
          className={`mr-2 custom-checkbox ${error ? 'border-red-500' : isDisabled ? 'border-gray-300 bg-gray-100 cursor-not-allowed' : 'border-gray-300'}`}
          disabled={isDisabled}
          {...props}
        />
        {label}
      </label>
      
      {error && <abbr className="text-red-500 text-xs mt-1">{error}</abbr>}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
