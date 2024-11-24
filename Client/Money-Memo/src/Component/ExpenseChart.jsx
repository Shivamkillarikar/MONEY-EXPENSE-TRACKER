import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);


const ExpenseChart = ({ expenses }) => {
    const categories = ['Food', 'Transport', 'Entertainment', 'Other'];
    const chartDataByCategory = categories.map(category => {
        return expenses
            .filter(expense => expense.category === category)
            .reduce((sum, expense) => sum + expense.amount, 0);
    });

    const pieData = {
        labels: categories,
        datasets: [
            {
                label: 'Expenses by Category',
                data: chartDataByCategory,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A'],
            },
        ],
    };

    const barData = {
        labels: categories,
        datasets: [
            {
                label: 'Expenses by Category',
                data: chartDataByCategory,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A'],
            },
        ],
    };

    const lineData = {
        labels: expenses.map(expense => new Date(expense.date).toLocaleDateString()),
        datasets: [
            {
                label: 'Expenses Over Time',
                data: expenses.map(expense => expense.amount),
                backgroundColor: '#36A2EB',
                borderColor: '#36A2EB',
                fill: false,
            },
        ],
    };

    return (
        <div>
            <h2>Expense Breakdown by Category (Pie Chart)</h2>
            <Pie data={pieData} />

            <h2>Expense Breakdown by Category (Bar Chart)</h2>
            <Bar data={barData} />

            <h2>Expense Trend Over Time (Line Chart)</h2>
            <Line data={lineData} />
        </div>
    );
};

export default ExpenseChart;
