
import React, { useState } from "react";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import "./App.css";

function App() {
    const [screen, setScreen] = useState("login");

    const navigateToLogin = () => {
        setScreen("login");
    };

    const navigateToRegister = () => {
        setScreen("register");
    };

    return (
        <div className="App">
            {screen === "login" && <LoginScreen onNavigateToRegister={navigateToRegister} />}
            {screen === "register" && <RegisterScreen onNavigateToLogin={navigateToLogin} />}
        </div>
    );
}

export default App;
