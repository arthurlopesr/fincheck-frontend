import { useState } from "react";
import { useDashboard } from "../useDashboard";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isFilterModalOpen, setIsFilterModalOpe] = useState(true);

  function handleOpenFilterModal() {
    setIsFilterModalOpe(true);
  }

  function handleCloseFilterModal() {
    setIsFilterModalOpe(false);
  }

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    transactions: [],
    handleOpenFilterModal,
    handleCloseFilterModal,
    isFilterModalOpen,
  }
}
