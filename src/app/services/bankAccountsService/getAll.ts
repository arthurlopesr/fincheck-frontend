import { BankAccount } from "../../@types/BankAccount";
import { httpClient } from "../httpClient";

type BankAccountResponse = Array<BankAccount>


export async function getAll() {
  const { data } = await httpClient.get<BankAccountResponse>('/bank-accounts')

  return data;
}

