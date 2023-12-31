import { useEffect, useState } from "react";
import { useDashboard } from "../useDashboard";
import { useTransactions } from "../useTransactions";
import { TransactionsFilters } from "../../app/services/transactionsService/getAll";
import { Transaction } from "../../app/@types/Transactions";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isEditModalOpen, setIsModalOpen] = useState(false);
  const [transactionBeingEdited, setTransactionBeingEdited] = useState<null | Transaction>(null);
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
    setIsFilterModalOpen(true);
  }

  function handleCloseFilterModal() {
    setIsFilterModalOpen(false);
  }

  function handleChangeFilters<TFilter extends keyof TransactionsFilters>(filter: TFilter) {
    return (value: TransactionsFilters[TFilter]) => {
      if (value === filters[filter]) return;

      setFilters(prevState => ({
        ...prevState,
        [filter]: value,
      }));
    }
  }

  function handleApplyFilters({
    bankAccountId,
    year,
  }: { bankAccountId: string | undefined; year: number }) {
    handleChangeFilters('bankAccountId')(bankAccountId);
    handleChangeFilters('year')(year);
    setIsFilterModalOpen(false);
  }

  function handleOpenEditModal(transaction: Transaction) {
    setIsModalOpen(true);
    setTransactionBeingEdited(transaction);
  }

  function handleCloseEditModal() {
    setIsModalOpen(false);
    setTransactionBeingEdited(null);
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
    handleChangeFilters,
    handleApplyFilters,
    isEditModalOpen,
    transactionBeingEdited,
    handleOpenEditModal,
    handleCloseEditModal
  }
}
