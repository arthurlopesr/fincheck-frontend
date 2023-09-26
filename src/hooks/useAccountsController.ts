import { useState } from "react";
import { useWindowWidth } from "./useWindowWidth";

export function useAccountsController() {
  const windowWidth = useWindowWidth();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  return {
    sliderState,
    setSliderState,
    windowWidth,
  }
}
