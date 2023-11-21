const reportChart = document.querySelector('.report__chart');

export const clearChart = () => {
    reportChart.textContent = '';
};

export const generateChart = (data) => {
    const incomeData = data.filter((item) => item.type === 'income');
    const expensesData = data.filter((item) => item.type === 'expenses');

    const chartLabel = [...new Set(data.map(item => item.date))];

    const reduceOperationInDate = (arrDate) =>
        chartLabel.reduce((acc, date) => {
            const total = arrDate
                .filter(item => item.date === date)
                .reduce((acc, record) => acc + parseFloat(record.amount), 0);
            acc[0] += total
            acc[1].push(acc[0]);

            return [acc[0], acc[1]];
        }, [0, []]
     );

    const [accIncome, incomeAmounts] = reduceOperationInDate(incomeData);
    const [accExpenses, expensesAmounts] = reduceOperationInDate(expensesData);
    console.log(accExpenses, accIncome);

};