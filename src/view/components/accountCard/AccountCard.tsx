import { formatCurrency } from "../../../app/utils/formartCurrency";
import { CategoryIcon } from "../icons/categories/CategoryIcon";

interface AccountCardProps {
  color: string;
  name: string;
  balance: number;
}

export function AccountCard({ color, name, balance }: AccountCardProps) {
  return (
    <div
      className="p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between border-b-4 border-teal-950"
      style={{ borderColor: color }}
    >
      <div>
        <CategoryIcon type="income" />
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
