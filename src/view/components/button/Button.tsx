import { ComponentProps } from "react";
import { cn } from "../../../app/utils/cn";

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;

}

export function Button({ className, isLoading, disabled, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        'bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 px-6 h-12 transition-all rounded-2xl text-white disabled:text-gray-400 disabled:cursor-not-allowed font-medium tracking-[-0.5px]',
        className
      )}
    />
  )
}
