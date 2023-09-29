import { EyeIcon } from "../icons/EyeIcon";
import 'swiper/css'
import { AccountCard } from "../accountCard/AccountCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { AccountSliderNavigation } from "../accountSliderNavigation/AccountSliderNavigation";
import { formatCurrency } from "../../../app/utils/formartCurrency";
import { cn } from "../../../app/utils/cn";
import { useAccountsController } from "../../../hooks/controllers/useAccountsController";
import { Spinner } from "../spinner/Spinner";

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
  } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner className="text-teal-950/50 fill-white w-10 h-10" />
        </div>
      )}

      {!isLoading && (
        <>
          <div>
            <span className="tracking-[-0.5px] text-white block">
              Saldo total
            </span>

            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  'text-2xl tracking-[-1px] text-white',
                  !areValuesVisible && 'blur-md'
                )}
              >
                {formatCurrency(1000.12)}
              </strong>

              <button
                className="w-8 h-8 flex items-center justify-center"
                onClick={toggleValuesVisibility}
              >
                <EyeIcon
                  open={!areValuesVisible}
                />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
            <div>
              <Swiper
                spaceBetween={16}
                slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
                onSlideChange={swiper => setSliderState({
                  isBeginning: swiper.isBeginning,
                  isEnd: swiper.isEnd,
                })}
              >
                <div className="flex items-center justify-between mb-4" slot="container-start">
                  <strong className="text-white tracking-[-1px] text-lg">
                    Minhas Contas
                  </strong>

                  <AccountSliderNavigation
                    isBeginning={sliderState.isBeginning}
                    isEnd={sliderState.isEnd}
                  />
                </div>

                <SwiperSlide>
                  <AccountCard
                    color="#222"
                    name="XP"
                    balance={1000.12}
                    type="INVESTIMENT"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <AccountCard
                    color="#7950F2"
                    name="Nubank"
                    balance={100.12}
                    type="CHECKING"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <AccountCard
                    color="#0f0"
                    name="Carteira"
                    balance={231.12}
                    type="CASH"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </>
      )}
    </div >
  );
}
