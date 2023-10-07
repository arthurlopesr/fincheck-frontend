import { useNewTransactionModalController } from "../../../hooks/controllers/useNewTransactionModalController";
import { Button } from "../button/Button";
import { DatePickerInput } from "../datePickerInput/DatePickerInput";
import { Input } from "../input/Input";
import { InputCurrency } from "../inputCurrency/InputCurrency";
import { Modal } from "../modal/Modal";
import { Select } from "../select/Select";

export function NewTransactionModal() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  } = useNewTransactionModalController();

  const isExpense = newTransactionType === 'EXPENSE';

  return (
    <Modal
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form>
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">
            Valor {isExpense ? 'da despesa' : 'da receita'}
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
            placeholder={isExpense ? 'Nome da Despesa' : 'Nome da Receita'}
          />

          <Select
            placeholder="Categoria"
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

          <Select
            placeholder={isExpense ? 'Pagar com' : 'Receber com'}
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

          <DatePickerInput />
        </div>

        <Button className="w-full mt-6" type="submit">
          Criar
        </Button>
      </form>
    </Modal >
  );
}
