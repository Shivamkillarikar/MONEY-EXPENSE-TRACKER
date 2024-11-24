import Details from "./Component/Details";
import 'bootstrap/dist/css/bootstrap.min.css';
import PastSplits from "./Component/PastSplits";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import AuthForm from "./Component/AuthForm";
import SetBudget from "./Component/setBudget";
import ExpenseTracker from "./Component/ExpenseTracker";
import Navbar from "./Component/Navbar";
import ChartTypeSelection from "./Component/ChartTypeSelection";

import ExpenseChart from "./Component/ExpenseChart";
import { useState } from "react";


function App() {
    const [expenses,setExpenses]= useState([]);
    return (
        
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Navbar />} />
                    <Route path="/auth" element={<AuthForm />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/past-splits" element={<PastSplits />} />
                    <Route path="/budget" element={<SetBudget />} />
                    <Route path='/tracker' element={<ExpenseTracker expenses={expenses} setExpenses={setExpenses} />} />
                    <Route path="/tracker/charts" element={<ChartTypeSelection expenses={expenses} />} />
                    <Route path="/tracker/charts/bar" element={<ExpenseChart expenses={expenses} chartType="bar" />} />
                    <Route path="/tracker/charts/pie" element={<ExpenseChart expenses={expenses} chartType="pie" />} />
                    <Route path="/tracker/charts/line" element={<ExpenseChart expenses={expenses} chartType="line" />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
