import { Logo } from "../logo/Logo";
import { Spinner } from "../spinner/Spinner";

export function LauchScreen() {
  return (
    <div className="bg-teal-900 fixed top-0 left-0 w-full h-full grid place-items-center">
      <div className="flex flex-col items-center">
        <Logo className="h-10 text-white" />
        <Spinner className="text-teal-900 fill-white mt-4" />
      </div>
    </div>
  );
}
