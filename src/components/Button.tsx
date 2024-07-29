import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, fullWidth = false, className = "", ...propsToFwd } = props;

  return (
    <button
      className={`bg-[#4A96FF] py-3 px-9 text-white rounded ${className} ${
        fullWidth ? "w-full" : ""
      }`}
      {...propsToFwd}
    >
      {children}
    </button>
  );
};

export default Button;
