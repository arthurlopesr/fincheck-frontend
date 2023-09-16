import { Transition } from "@headlessui/react";
import { Logo } from "../logo/Logo";
import { Spinner } from "../spinner/Spinner";

interface LauchScreenProps {
  isLoading: boolean;
}

export function LauchScreen({ isLoading }: LauchScreenProps) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-teal-900 fixed top-0 left-0 w-full h-full grid place-items-center">
        <div className="flex flex-col items-center">
          <Logo className="h-10 text-white" />
          <Spinner className="text-teal-900 fill-white mt-4" />
        </div>
      </div>
    </Transition>

  );
}
