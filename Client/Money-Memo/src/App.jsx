import Details from "./Component/Details";
import 'bootstrap/dist/css/bootstrap.min.css';
import PastSplits from "./Component/PastSplits";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import AuthForm from "./Component/AuthForm";
import SetBudget from "./Component/SetBudget";
import ExpenseTracker from "./Component/ExpenseTracker";
import Navbar from "./Component/Navbar";

function App() {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<AuthForm />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/past-splits" element={<PastSplits />} />
                    <Route path="/budget" element={<SetBudget />} />
                    <Route path='/tracker' element={<ExpenseTracker />} />
                    <Route path='/navbar' element={<Navbar />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
