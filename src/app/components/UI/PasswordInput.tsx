"use client";
import { InputHTMLAttributes, useState, forwardRef } from "react";
import * as I from "react-icons/ai";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ id, label, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="flex flex-col w-full">
        <label className="text-sm font-medium text-sky-900" htmlFor={id}>
          {label}:
          <abbr className="text-red-500"> *</abbr>
        </label>

        <div className="relative mt-1">
          <input
            id={id}
            ref={ref}
            type={showPassword ? "text" : "password"}
            className={`w-full px-4 py-2 border ${
              error ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800`}
            {...props}
          />

          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <I.AiFillEye className="h-5 w-5 text-gray-400" />
            ) : (
              <I.AiFillEyeInvisible className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>

        {error && <abbr className="text-red-500 text-xs mt-1">{error}</abbr>}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;