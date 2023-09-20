import { formatCurrency } from "../../../app/utils/formartCurrency";
import { BankAccountTypeIcon } from "../icons/BankAccountTypeIcon";

interface AccountCardProps {
  color: string;
  name: string;
  balance: number;
  type: 'CASH' | 'CHECKING' | 'INVESTIMENT';
}

export function AccountCard({ color, name, balance, type }: AccountCardProps) {
  return (
    <div
      className="p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between border-b-4 border-teal-950"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountTypeIcon type={type} />

        <span className="text-gray-800 font-medium tracking-[-0.5px] mt-4 block">
          {name}
        </span>
      </div>

      <div>
        <span className="text-gray-800 font-medium tracking-[-0.5px] block">
          {formatCurrency(balance)}
        </span>
        <small className="text-gray-600 text-sm">
          Saldo Atual
        </small>
      </div>
    </div>
  );
}
