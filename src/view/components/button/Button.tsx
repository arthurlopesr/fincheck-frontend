import { ComponentProps } from "react";
import { cn } from "../../../app/utils/cn";
import { Spinner } from "../spinner/Spinner";

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
  variant?: 'danger' | 'ghost';
}

export function Button({ className, isLoading, disabled, children, variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        'bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 px-6 h-12 transition-all rounded-2xl text-white disabled:text-gray-400 disabled:cursor-not-allowed font-medium tracking-[-0.5px] flex items-center justify-center',
        variant === 'danger' && 'bg-red-900 text-white hover:bg-red-800',
        variant === 'ghost' && 'bg-transparent text-gray-900 border border-gray-800 hover:bg-gray-800/5 transition-colors',
        className
      )}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="w-6 h-6" />}
    </button>
  )
}
