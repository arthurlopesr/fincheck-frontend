import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBankAccounts } from "../useBankAccunts";
import { useCategories } from "../useCategories";
import { useMemo, useState } from "react";
import { Transaction } from "../../app/@types/Transactions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transactionsService } from "../../app/services/transactionsService";
import { currencyStringToNumber } from "../../app/utils/currencyStringToNumber";
import toast from "react-hot-toast";

const schema = z.object({
  value: z.union([
    z.string().nonempty('Informe o valor'),
    z.number()
  ]),
  name: z.string().nonempty('Informe o nome'),
  categoryId: z.string().nonempty('Informe a categoria'),
  bankAccountId: z.string().nonempty('Informe a conta bancária'),
  date: z.date(),
})

type FormData = z.infer<typeof schema>;

export function useEditedTransactionModalController(
  transaction: Transaction | null,
  onClose: () => void,
) {
  const refrashPage = () => window.location.reload();

  const {
    register,
    handleSubmit: hookformSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      bankAccountId: transaction?.bankAccountId,
      categoryId: transaction?.categoryId,
      name: transaction?.name,
      value: transaction?.value,
      date: transaction ? new Date(transaction.date) : new Date(),
    }
  });

  const { accounts } = useBankAccounts();
  const { categories: categoriesList } = useCategories();
  const queryClient = useQueryClient();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const {
    isLoading,
    mutateAsync: updateTransaction,
  } = useMutation(transactionsService.update);

  const {
    isLoading: isLoadingRemove,
    mutateAsync: removeTransaction,
  } = useMutation(transactionsService.remove);

  const handleSubmit = hookformSubmit(async data => {
    try {
      await updateTransaction({
        ...data,
        id: transaction!.id,
        type: transaction!.type,
        value: currencyStringToNumber(data.value),
        date: data.date.toISOString(),
      });

      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      toast.success(
        transaction!.type === 'EXPENSE'
          ? 'Despesa editada com sucesso!'
          : 'Receita editada com sucesso!'
      );
      onClose();
      refrashPage();
    } catch {
      toast.error(
        transaction!.type === 'EXPENSE'
          ? 'Erro ao salvar despesa!'
          : 'Erro ao salvar receita!'
      );
    }
  })

  const categories = useMemo(() => {
    return categoriesList.filter(category => category.type === transaction?.type);
  }, [categoriesList, transaction]);

  async function handleDeleteTransaction() {
    try {
      await removeTransaction(transaction!.id);

      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      toast.success(transaction!.type === 'EXPENSE'
        ? 'Despesa deletada!'
        : 'Receita deletada'
      );
      onClose();
    } catch {
      toast.error(
        transaction!.type === 'EXPENSE'
          ? 'Erro ao deletar despesa!'
          : 'Erro ao deletar receita!'
      );
    }
  }

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  return {
    register,
    errors,
    control,
    handleSubmit,
    accounts,
    refrashPage,
    categories,
    isLoading,
    isLoadingRemove,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    handleDeleteTransaction,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
  }
}
