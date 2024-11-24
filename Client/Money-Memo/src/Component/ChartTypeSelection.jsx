import React from 'react';
import { Link } from 'react-router-dom';

const ChartTypeSelection = () => {
    return (
        <div>
            <h2>Select Chart Type</h2>
            <Link to="/tracker/charts/bar">
                <button>Bar Chart</button>
            </Link>
            <Link to="/tracker/charts/pie">
                <button>Pie Chart</button>
            </Link>
            <Link to="/tracker/charts/line">
                <button>Line Chart</button>
            </Link>
        </div>
    );
};

export default ChartTypeSelection;
