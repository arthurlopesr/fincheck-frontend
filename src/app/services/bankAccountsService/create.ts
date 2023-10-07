import { httpClient } from "../httpClient";

export interface BankAccountParams {
  name: string,
  initialBalance: number,
  color: string,
  type: 'CHECKING' | 'INVESTIMENT' | 'CASH';
}

export async function create(params: BankAccountParams) {
  const { data } = await httpClient.post('/bank-accounts', params)

  return data;
}

