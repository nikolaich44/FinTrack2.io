export interface Transaction {
  id: string;
  amount: number;
  description: string;
  category: string;
  type: 'income' | 'expense';
  date: Date;
}

export interface Category {
  name: string;
  icon: string;
  color: string;
}