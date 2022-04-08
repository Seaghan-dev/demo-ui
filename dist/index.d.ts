/// <reference types="react" />
import { ComponentPropsWithRef } from 'react';

interface ButtonProps extends ComponentPropsWithRef<"button"> {
    label: string;
}

declare const Button: ({ label, ...props }: ButtonProps) => JSX.Element;

export { Button };
