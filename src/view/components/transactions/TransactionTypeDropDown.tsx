import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../icons/TransactionsIcon";
import { DropdownMenu } from "../dropDownMenu/DropDownMenu";

export function TransactionTypeDropDown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button className="flex items-center gap-2">
          <TransactionsIcon />
          <span className="text-sm text-gray-800 tracking-[-0.5] font-medium">
            Transações
          </span>
          <ChevronDownIcon className="text-gray-900" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Item>
          Receitas
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          Despesas
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          Transações
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
