export interface Transaction {
    id: number;
    transactionDate: string;
    userLogin: string;
    sourceAmount: number;
    sourceCurrency: string;
    targetCurrency: string;
    exchangeRate: number;
}