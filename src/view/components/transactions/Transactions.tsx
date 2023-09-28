import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../icons/TransactionsIcon";
import { FilterIcon } from "../icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../app/config/constants";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { formatCurrency } from "../../../app/utils/formartCurrency";
import { CategoryIcon } from "../icons/categories/CategoryIcon";
import { useTransactionsController } from "../../../hooks/controllers/useTransactionsController";
import { cn } from "../../../app/utils/cn";

export function Transactions() {
  const { areValuesVisible } = useTransactionsController();

  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
      <header>
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

      <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-5">
          <div className="flex-1 flex items-center gap-4">
            <CategoryIcon type="expense" />
            <div>
              <strong className="font-bold tracking-[-0.5px] block">
                Almoço
              </strong>
              <span className="text-sm text-gray-600">
                10/10/2020
              </span>
            </div>
          </div>

          <span className={cn(
            'text-red-800 tracking-[-0.5px] font-medium text-sm',
            !areValuesVisible && 'blur-sm'
          )}>
            - {formatCurrency(1000)}
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-5">
          <div className="flex-1 flex items-center gap-4">
            <CategoryIcon type="income" />
            <div>
              <strong className="font-bold tracking-[-0.5px] block">
                Almoço
              </strong>
              <span className="text-sm text-gray-600">
                10/10/2020
              </span>
            </div>
          </div>

          <span className={cn(
            'text-green-800 tracking-[-0.5px] font-medium text-sm',
            !areValuesVisible && 'blur-sm'
          )}>
            + {formatCurrency(1000)}
          </span>
        </div>
      </div>
    </div>
  )
}
