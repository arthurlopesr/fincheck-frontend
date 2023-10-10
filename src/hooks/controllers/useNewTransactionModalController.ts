import { z } from "zod";
import { useDashboard } from "../useDashboard";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBankAccounts } from "../useBankAccunts";
import { useCategories } from "../useCategories";
import { useMemo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transactionsService } from "../../app/services/transactionsService";
import toast from "react-hot-toast";
import { currencyStringToNumber } from "../../app/utils/currencyStringToNumber";

const schema = z.object({
  value: z.string().nonempty('Informe o valor'),
  name: z.string().nonempty('Informe o nome'),
  categoryId: z.string().nonempty('Informe a categoria'),
  bankAccountId: z.string().nonempty('Informe a conta bancária'),
  date: z.date(),
})

type FormData = z.infer<typeof schema>;

export function useNewTransactionModalController() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  } = useDashboard();

  const {
    register,
    handleSubmit: hookformSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const queryClient = useQueryClient();
  const { accounts } = useBankAccounts();
  const { categories: categoriesList } = useCategories();
  const {
    isLoading,
    mutateAsync,
  } = useMutation(transactionsService.create);

  const refrashPage = () => window.location.reload();

  const handleSubmit = hookformSubmit(async data => {
    try {
      await mutateAsync({
        ...data,
        value: currencyStringToNumber(data.value),
        type: newTransactionType!,
        date: data.date.toISOString(),
      });

      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      toast.success(
        newTransactionType === 'EXPENSE'
          ? 'Despesa cadastrada com sucesso!'
          : 'Receita cadastrada com sucesso!'
      );
      closeNewTransactionModal();
      reset();
      refrashPage();
    } catch {
      toast.error(
        newTransactionType === 'EXPENSE'
          ? 'Erro ao cadastrar despesa!'
          : 'Erro ao cadastrar receita!'
      );
    }
  })

  const categories = useMemo(() => {
    return categoriesList.filter(category => category.type === newTransactionType);
  }, [categoriesList, newTransactionType]);

  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
    register,
    errors,
    control,
    handleSubmit,
    accounts,
    categories,
    isLoading,
    mutateAsync,
  }
}
