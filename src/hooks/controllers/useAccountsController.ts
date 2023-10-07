import { useState } from "react";
import { useWindowWidth } from "../useWindowWidth";
import { useDashboard } from "../useDashboard";
import { useQuery } from "@tanstack/react-query";
import { bankAccountsService } from "../../app/services/bankAccountsService";


export function useAccountsController() {
  const windowWidth = useWindowWidth();
  const {
    areValuesVisible,
    toggleValuesVisibility,
    openNewAccountModal,
  } = useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const { data = [], isFetching } = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: () => bankAccountsService.getAll(),
  });

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading: isFetching,
    accounts: data ?? [],
    openNewAccountModal,
  }
}
