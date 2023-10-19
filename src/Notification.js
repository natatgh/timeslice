import React from 'react';
import './Notification.css';

function Notification(props) {
    if (!props.message) {
        return null;  // Não renderiza nada se a mensagem for null ou vazia
    }

    return (
        <div className="container">
            <div className="rectangle"></div>
            <div className='notification-text'>
                <div className='line-1'></div>
                <span>{props.message}</span>
                <div className='line-2'></div>
            </div>
        </div>
    );
}

export default Notification;
