import { useQuery } from "@tanstack/react-query";
import { transactionsService } from "../app/services/transactionsService";
import { TransactionsFilters } from "../app/services/transactionsService/getAll";

export function useTransactions(filters: TransactionsFilters) {
  const { data, isFetching, isInitialLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: () => transactionsService.getAll(filters),
  });

  return {
    transactions: data ?? [],
    isLoading: isFetching,
    isInitialLoading,
  }
}
