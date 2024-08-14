"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "green" | "blue" | "outline";
  icon?: ReactNode;
  text: string;
}

export default function Button({ variant = "green", icon, text, ...props }: ButtonProps) {
  const baseStyles =
    "w-fit px-5 py-1 rounded-md flex items-center justify-center transition-colors";

  let colorStyles = "";
  switch (variant) {
    case "green":
      colorStyles = "bg-green-500 hover:bg-green-600 font-semibold";
      break;
    case "blue":
      colorStyles = "bg-sky-600 hover:bg-sky-700 px-7";
      break;
    case "outline":
      colorStyles =
        "text-gray-600 border border-gray-600 hover:bg-gray-600 hover:text-white px-7";
      break;
  }

  return (
    <button className={`${baseStyles} ${colorStyles}`} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
}
