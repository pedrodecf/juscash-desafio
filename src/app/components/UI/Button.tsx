"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorVariant?: "green" | "blue";
  icon?: ReactNode;
  text: string;
}

export default function Button({ colorVariant = "green", icon, text, ...props }: ButtonProps) {
  const baseStyles = "w-fit px-5 py-1 rounded-md text-white font-semibold flex items-center justify-center";
  const colorStyles = colorVariant === "green" ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600";

  return (
    <button className={`${baseStyles} ${colorStyles}`} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
}
