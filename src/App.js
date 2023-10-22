import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import Home from "./Home";
import "./App.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);  // State to verify if the user is logged in

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);  // Update the state when the login is successful
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
                    <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
                    <Route path="/login" element={<LoginScreen onLoginSuccess={handleLoginSuccess} />} />
                    <Route path="/register" element={<RegisterScreen />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
