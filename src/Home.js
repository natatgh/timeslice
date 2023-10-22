import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="phone">
            <div className="page">Home</div>
            
            <nav>
                <div className="wave-wrap">
                    <svg version="1.1" id="wave" viewBox="0 0 119 26">
                        <path className="path" 
                              d="M120.8,26C98.1,26,86.4,0,60.4,0C35.9,0,21.1,26,0.5,26H120.8z"/>
                    </svg>
                </div>

                <ul className="list-wrap">
                    <li data-color="#537895" title="Usuário">
                        <i className="icon ion-ios-person"></i>
                    </li>
                    <li data-color="#7bed9f" title="Tarefas">
                        <i className="icon ion-ios-list-box"></i>
                    </li>
                    <li data-color="#dfe4ea" title="Configurações">
                        <i className="icon ion-ios-settings"></i>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
