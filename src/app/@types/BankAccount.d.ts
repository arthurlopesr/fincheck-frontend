export interface BankAccount {
  id: string;
  name: string;
  initialBalance: number;
  type: 'CHECKING' | 'INVESTIMENT' | 'CASH';
  color: string;
  currentBalance: number;
}
