import { useNewAccountModalController } from "../../../hooks/controllers/useNewAccountModalController";
import { Button } from "../button/Button";
import { ColorsDropDownInput } from "../colorsDropDown/ColorsDropDown";
import { Input } from "../input/Input";
import { InputCurrency } from "../inputCurrency/InputCurrency";
import { Modal } from "../modal/Modal";
import { Select } from "../select/Select";

export function NewAccountModal() {
  const {
    isNewAccountModalOpen,
    closeNewAccountModal,
  } = useNewAccountModalController();

  return (
    <Modal
      title="Nova Conta"
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}
    >
      <form action="">
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">
            Saldo
          </span>

          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">
              R$
            </span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Nome da conta"
          />

          <Select
            placeholder="Tipo"
            options={[
              {
                value: 'INVESTMENTS',
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

          <ColorsDropDownInput />
        </div>

        <Button className="w-full mt-6" type="submit">
          Salvar
        </Button>
      </form>
    </Modal >
  );
}
