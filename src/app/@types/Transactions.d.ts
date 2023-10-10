export interface Transaction {
  id: string;
  name: string;
  value: number;
  date: Date;
  type: 'INCOME' | 'EXPENSE';
}
