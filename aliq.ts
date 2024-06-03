type Incomes = {
  [key: string]: number;
};

const monthlyIncomes: Incomes = {
  // ... (income data goes here)
};

function logMonthlyIncome(revenue: string, incomes: Incomes): void {
  const income = incomes[revenue as keyof Incomes];
  if (income !== undefined) {
    console.log(income);
  } else {
    console.error('Revenue key does not exist in incomes.');
  }
}

// Usage
const revenue: string = 'January'; // Example revenue key
logMonthlyIncome(revenue, monthlyIncomes);
