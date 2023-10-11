import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../icons/TransactionsIcon";
import { DropdownMenu } from "../dropDownMenu/DropDownMenu";
import { IncomeIcon } from "../icons/IncomeIcon";
import { ExpensesIcon } from "../icons/ExpensesIcon";

interface TransactionTypeDropDownProps {
  onSelect(type: 'INCOME' | 'EXPENSE' | undefined): void;
  selectedType?: 'INCOME' | 'EXPENSE' | undefined;
}

export function TransactionTypeDropDown({ onSelect, selectedType }: TransactionTypeDropDownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="flex items-center gap-2">
          {selectedType === 'INCOME' && <IncomeIcon />}
          {selectedType === 'EXPENSE' && <ExpensesIcon />}
          {selectedType === undefined && <TransactionsIcon />}

          <span className="text-sm text-gray-800 tracking-[-0.5] font-medium">
            {selectedType === 'INCOME' && 'Receitas'}
            {selectedType === 'EXPENSE' && 'Despesas'}
            {selectedType === undefined && 'Transações'}
          </span>

          <ChevronDownIcon className="text-gray-900" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-[279px]">
        <DropdownMenu.Item className="gap-2" onSelect={() => onSelect('INCOME')}>
          <IncomeIcon />
          Receitas
        </DropdownMenu.Item>

        <DropdownMenu.Item className="gap-2" onSelect={() => onSelect('EXPENSE')}>
          <ExpensesIcon />
          Despesas
        </DropdownMenu.Item>

        <DropdownMenu.Item className="gap-2" onSelect={() => onSelect(undefined)}>
          <TransactionsIcon />
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
