import { useState } from "react";
import { useWindowWidth } from "../useWindowWidth";
import { useDashboard } from "../useDashboard";


export function useAccountsController() {
  const windowWidth = useWindowWidth();
  const { areValuesVisible, toggleValuesVisibility } = useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading: true,
    accounts: [],
  }
}
