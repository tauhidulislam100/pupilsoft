import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
type ButtonProps = {
  className?: string;
  children: ReactNode | string;
};

const Button = ({
  className,
  children,
  ...rest
}: ButtonProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
  return (
    <button
      {...rest}
      className={twMerge(
        'w-full bg-[#FF8D29] shadow-sm tracking-[0.1px] py-5 px-[30px] rounded-full text-white font-commissioner text-[26px] font-semibold',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
