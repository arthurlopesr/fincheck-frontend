import { Controller } from "react-hook-form";
import { Button } from "../button/Button";
import { ColorsDropDownInput } from "../colorsDropDown/ColorsDropDown";
import { Input } from "../input/Input";
import { InputCurrency } from "../inputCurrency/InputCurrency";
import { Modal } from "../modal/Modal";
import { Select } from "../select/Select";
import { useEditedAccountModalController } from "../../../hooks/controllers/useEditedAccountModalController";
import { TrashIcon } from "../icons/TrashIcon";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";

export function EditAccountModal() {
  const {
    isEditAccountModalOpen,
    closeEditAccountModal,
    errors,
    handleSubmit,
    register,
    control,
    isLoading,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteAccount,
  } = useEditedAccountModalController();

  if (isDeleteModalOpen) {
    return (
      <ConfirmDeleteModal
        isLoadingRemove={isLoading}
        onConfirm={handleDeleteAccount}
        onClose={handleCloseDeleteModal}
        title="Tem certeza que deseja excluir esta conta?"
        description="Ao excluir a conta, também serão excluídos todos os registros de receita e despesas relacionados."
      />
    )
  }

  return (
    <Modal
      title="Editar Conta"
      open={isEditAccountModalOpen}
      onClose={closeEditAccountModal}
      rightAction={(
        <button onClick={handleOpenDeleteModal}>
          <TrashIcon className="w-6 h-6 text-red-900" />
        </button>
      )}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">
            Saldo inicial
          </span>

          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">
              R$
            </span>

            <Controller
              control={control}
              name="initialBalance"
              defaultValue="0"
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  error={errors.initialBalance?.message}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Nome da conta"
            error={errors.name?.message}
            {...register('name')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Tipo"
                error={errors.type?.message}
                onChange={onChange}
                value={value}
                options={[
                  {
                    value: 'INVESTIMENT',
                    label: 'Investimentos'
                  },
                  {
                    value: 'CHECKING',
                    label: 'Conta Corrente'
                  },
                  {
                    value: 'CASH',
                    label: 'Dinheiro'
                  },
                ]}
              />
            )}
          />

          <Controller
            control={control}
            name="color"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <ColorsDropDownInput
                error={errors.color?.message}
                onChange={onChange}
                value={value}
              />
            )}
          />

        </div>

        <Button className="w-full mt-6" type="submit" isLoading={isLoading}>
          Salvar Alterações
        </Button>
      </form>
    </Modal >
  );
}
