import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> { }

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 px-6 h-12 transition-all rounded-2xl text-white disabled:text-gray-400 disabled:cursor-not-allowed
      font-medium tracking-[-0.5px] "
    />
  )
}
