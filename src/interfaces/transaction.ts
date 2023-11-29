export interface TransactionTableInterface extends Record<string, unknown> {
  transactionId: string;
  source: string;
  customerName: string;
  customerEmail: string;
  amount: string;
  requestDate: string;
  status: string;
}
