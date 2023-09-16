import { Spinner } from "../spinner/Spinner";

export function PageLoader() {
  return (
    <div className="bg-gray-0 fixed top-0 left-0 w-full h-full grid place-items-center">
      <Spinner />
    </div>
  );
}
