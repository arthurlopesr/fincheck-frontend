import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../icons/TransactionsIcon";
import { FilterIcon } from "../icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../app/config/constants";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";

export function Transactions() {
  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full p-10">
      <header className="">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2">
            <TransactionsIcon />
            <span className="text-sm text-gray-800 tracking-[-0.5] font-medium">
              Transações
            </span>
            <ChevronDownIcon className="text-gray-900" />
          </button>
          <button>
            <FilterIcon />
          </button>
        </div>

        <div className="mt-6 relative">
          <Swiper
            slidesPerView={3}
            centeredSlides
          >
            <SliderNavigation />
            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <SliderOption
                    index={index}
                    month={month}
                    isActive={isActive}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4">
        Conteudo
      </div>
    </div>
  )
}
