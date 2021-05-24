import React from 'react';
import Chart from '../ExpensesFilter/Chart/Chart';

const ExpensesChart = (props) => {

  const dataPoints = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mär', value: 0},
    {label: 'Apr', value: 0},
    {label: 'Mai', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Okt', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dez', value: 0}
  ];

  for(const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    dataPoints[expenseMonth].value += expense.amount;
  }

  return (
    <Chart
      dataPoints={dataPoints}
    />
  );
};

export default ExpensesChart;