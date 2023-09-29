import { useDashboard } from "../useDashboard";

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  return {
    areValuesVisible,
    isLoading: false,
    transactions: [],
  }
}
