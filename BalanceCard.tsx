import { Card, CardContent } from '../components/ui/card';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { formatCurrency } from '../utils/calculations';
import { Transaction } from '../types';

interface BalanceCardProps {
  transactions: Transaction[];
}

export function BalanceCard({ transactions }: BalanceCardProps) {
  const balance = transactions.reduce((acc, t) => 
    t.type === 'income' ? acc + t.amount : acc - t.amount, 0
  );
  
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);
    
  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Баланс</p>
              <p className="text-3xl font-bold mt-1">{formatCurrency(balance)}</p>
            </div>
            <Wallet className="w-10 h-10 text-blue-200" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Доходы</p>
              <p className="text-3xl font-bold mt-1">{formatCurrency(income)}</p>
            </div>
            <TrendingUp className="w-10 h-10 text-green-200" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm font-medium">Расходы</p>
              <p className="text-3xl font-bold mt-1">{formatCurrency(expenses)}</p>
            </div>
            <TrendingDown className="w-10 h-10 text-red-200" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}