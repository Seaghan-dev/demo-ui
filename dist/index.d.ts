/// <reference types="react" />
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

declare const Button: ({ label, ...props }: ButtonProps) => JSX.Element;

export { Button };
