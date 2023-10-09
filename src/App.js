import React, { useState } from 'react';
import LoginScreen from './LoginScreen'; // Supondo que LoginScreen.js esteja no mesmo diretório
import RegisterScreen from './RegisterScreen'; // Supondo que RegisterScreen.js esteja no mesmo diretório

function ParentComponent() {
  const [showLogin, setShowLogin] = useState(true); // Estado inicial mostrando a tela de login

  return (
    <div>
      {showLogin 
        ? <LoginScreen onNavigateToRegister={() => setShowLogin(false)} />
        : <RegisterScreen onNavigateToLogin={() => setShowLogin(true)} />
      }
    </div>
  );
}

export default ParentComponent;
