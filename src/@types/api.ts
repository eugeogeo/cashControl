
export type GetTransactions = {
  search: string;
  limit: number;
  page: number;
}

export type Transaction = {
  id: number;
  description: string;
  price: number;
  category: string;
  type: boolean;
}
export type DataTransactions = {
  transactionsCount: number;
  transactionsList: Transaction[];
}