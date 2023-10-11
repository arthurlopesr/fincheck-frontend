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
import { FiltersModal } from "./FiltersModal";
import { formatDate } from "../../../app/utils/formatDate";

export function Transactions() {
  const {
    areValuesVisible,
    isInitialLoading,
    isLoading,
    transactions,
    isFilterModalOpen,
    handleCloseFilterModal,
    handleOpenFilterModal,
    handleChangeMonth,
    filters,
  } = useTransactionsController();

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
          <FiltersModal
            open={isFilterModalOpen}
            onClose={handleCloseFilterModal}
          />

          <header>
            <div className="flex items-center justify-between">
              <TransactionTypeDropDown />

              <button onClick={handleOpenFilterModal}>
                <FilterIcon />
              </button>
            </div>

            <div className="mt-6 relative">
              <Swiper
                slidesPerView={3}
                centeredSlides
                initialSlide={filters.month}
                onSlideChange={swiper => {
                  if (swiper.realIndex === filters.month) return;
                  handleChangeMonth(swiper.realIndex);
                }}
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

            {(hasTransactions && !isLoading) && transactions.map(transation => (
              <div
                key={transation.id}
                className="bg-white p-4 rounded-2xl flex items-center justify-between gap-5"
              >
                <div className="flex-1 flex items-center gap-4">
                  <CategoryIcon
                    type={transation.type === 'EXPENSE' ? 'expense' : 'income'}
                    category={transation.category?.icon}
                  />

                  <div>
                    <strong className="font-bold tracking-[-0.5px] block">
                      {transation.name}
                    </strong>
                    <span className="text-sm text-gray-600">
                      {formatDate(new Date(transation.date))}
                    </span>
                  </div>
                </div>

                <span className={cn(
                  'tracking-[-0.5px] font-medium text-sm',
                  transation.type === 'EXPENSE' ? 'text-red-500' : 'text-green-500',
                  !areValuesVisible && 'blur-sm'
                )}>
                  {transation.type === 'EXPENSE' ? '-' : '+'}
                  {formatCurrency(transation.value)}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
