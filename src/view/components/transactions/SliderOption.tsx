import { useSwiper } from "swiper/react";
import { cn } from "../../../app/utils/cn";

interface SliderOptionProps {
  month: string;
  isActive: boolean;
  index: number;
}

export function SliderOption({ month, isActive, index }: SliderOptionProps) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={cn(
        "w-full rounded-full h-12 text-sm text-gray-800 tracking-[-0.5] font-medium",
        isActive && "bg-white"
      )}
    >
      {month}
    </button>
  )
}
