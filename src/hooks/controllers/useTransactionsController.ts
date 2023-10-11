import { useEffect, useState } from "react";
import { useDashboard } from "../useDashboard";
import { useTransactions } from "../useTransactions";
import { TransactionsFilters } from "../../app/services/transactionsService/getAll";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();
  const [isFilterModalOpen, setIsFilterModalOpe] = useState(false);
  const [filters, setFilters] = useState<TransactionsFilters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const {
    transactions,
    isLoading,
    isInitialLoading,
    refetchTransactions,
  } = useTransactions(filters);

  useEffect(() => {
    refetchTransactions();
  }, [filters, refetchTransactions])

  function handleOpenFilterModal() {
    setIsFilterModalOpe(true);
  }

  function handleCloseFilterModal() {
    setIsFilterModalOpe(false);
  }

  function handleChangeMonth(month: number) {
    setFilters(prevState => ({
      ...prevState,
      month,
    }))
  }

  return {
    areValuesVisible,
    isInitialLoading,
    isLoading,
    transactions,
    isFilterModalOpen,
    filters,
    handleOpenFilterModal,
    handleCloseFilterModal,
    handleChangeMonth
  }
}
