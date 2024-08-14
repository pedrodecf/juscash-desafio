"use client";
import { InputHTMLAttributes, forwardRef } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ id, label, error, ...props }, ref) => {
  return (
    <div className="flex flex-col w-full">
      <label className="flex items-center text-sm font-medium text-sky-900" htmlFor={id}>
        <input
          id={id}
          ref={ref}
          type="checkbox"
          className={`mr-2 ${error ? 'border-red-500' : 'border-gray-300'} custom-checkbox`}
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
