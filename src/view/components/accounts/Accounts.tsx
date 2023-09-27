import { EyeIcon } from "../icons/EyeIcon";
import 'swiper/css'
import { AccountCard } from "../accountCard/AccountCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { AccountSliderNavigation } from "../accountSliderNavigation/AccountSliderNavigation";
import { useAccountsController } from "../../../hooks/useAccountsController";
import { formatCurrency } from "../../../app/utils/formartCurrency";

export function Accounts() {
  const { sliderState, setSliderState, windowWidth } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      <div>
        <span className="tracking-[-0.5px] text-white block">
          Saldo total
        </span>

        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            {formatCurrency(1000.12)}
          </strong>

          <button className="w-8 h-8 flex items-center justify-center">
            <EyeIcon
              open={true}
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
    </div >
  );
}
