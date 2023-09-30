import { FilterIcon } from "../icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../app/config/constants";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { formatCurrency } from "../../../app/utils/formartCurrency";
import { CategoryIcon } from "../icons/categories/CategoryIcon";
import { useTransactionsController } from "../../../hooks/controllers/useTransactionsController";
import { cn } from "../../../app/utils/cn";
import { Spinner } from "../spinner/Spinner";
import emptyStateImage from "../../../assets/empty-state.svg";
import { TransactionTypeDropDown } from "./TransactionTypeDropDown";

export function Transactions() {
  const { areValuesVisible, isInitialLoading, isLoading, transactions } = useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
      {isInitialLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner className="w-10 h-10 " />
        </div>
      )}

      {!isInitialLoading && (
        <>
          <header>
            <div className="flex items-center justify-between">
            <TransactionTypeDropDown />
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
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-full">
                <Spinner className="w-10 h-10 " />
              </div>
            )}

            {(!hasTransactions && !isLoading) && (
              <div className="flex flex-col items-center justify-center h-full">
                <img src={emptyStateImage} alt="teste" />
                <p className="text-gray-700">
                  Não encontramos nenhuma transação
                </p>
              </div>
            )}

            {(hasTransactions && !isLoading) && (
              <>
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
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}
