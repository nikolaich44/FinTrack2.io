import { Transaction } from '../types';

export const calculateBalance = (transactions: Transaction[]): number => {
  return transactions.reduce((acc, transaction) => {
    return transaction.type === 'income' 
      ? acc + transaction.amount 
      : acc - transaction.amount;
  }, 0);
};

export const calculateTotalByType = (
  transactions: Transaction[], 
  type: 'income' | 'expense'
): number => {
  return transactions
    .filter(t => t.type === type)
    .reduce((acc, t) => acc + t.amount, 0);
};

export const getTransactionsByCategory = (transactions: Transaction[]) => {
  const categoryMap = new Map<string, number>();
  
  transactions
    .filter(t => t.type === 'expense')
    .forEach(transaction => {
      const current = categoryMap.get(transaction.category) || 0;
      categoryMap.set(transaction.category, current + transaction.amount);
    });
  
  return Array.from(categoryMap.entries()).map(([name, value]) => ({
    name,
    value
  }));
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  }).format(amount);
};