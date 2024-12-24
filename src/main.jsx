import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Payments from "./pages/Payments/Payments.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/payments" element={<Payments />} />
            </Routes>
        </Router>
    </React.StrictMode>,
);
